import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const accessToken = event.cookies.get('accessToken');

	const response = await fetch('https://graph.microsoft.com/v1.0/me', {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	const data = await response.json();
	console.log('user data', data);
	return {};
}) satisfies PageServerLoad;
