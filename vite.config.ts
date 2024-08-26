import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();
console.log('dotenv.config();')
console.log(process.env);

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env': process.env
	},
	server: {
		port: process.env.PORT,
		strictPort: false,
	},
	preview: {
		port: process.env.PORT,
		strictPort: false,
	}

});
