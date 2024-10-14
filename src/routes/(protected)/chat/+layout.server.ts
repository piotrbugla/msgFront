import type { LayoutServerLoad } from './$types';
import { jwtDecode, type JwtPayload } from 'jwt-decode';

type UserDataFromToken = {
  fullName: string;
  givenName: string;
  secondName: string;
};

type JwtPayloadUserData = JwtPayload & {
  name: string;
  given_name: string;
  family_name: string;
};

const mapTokenToUserData = (
  decodedToken: JwtPayloadUserData
): UserDataFromToken => ({
  fullName: decodedToken.name,
  givenName: decodedToken.given_name,
  secondName: decodedToken.family_name,
});

export const load = ((event) => {
  const accessToken = event.cookies.get('accessToken');

  if (!accessToken) {
    throw new Error('Access token is missing');
  }

  try {
    const decodedToken = jwtDecode<JwtPayloadUserData>(accessToken);

    const userData: UserDataFromToken = mapTokenToUserData(decodedToken);

    console.log('User data:', userData);

    return {
      user: userData,
    };
  } catch (error) {
    console.error('Failed to decode token:', error);
    throw new Error('Failed to decode token');
  }
}) satisfies LayoutServerLoad;
