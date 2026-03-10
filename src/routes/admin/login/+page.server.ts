import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { ADMIN_PASSWORD } from '$env/static/private';

export const load: PageServerLoad = async ({ cookies }) => {
    if (cookies.get('admin_session') === ADMIN_PASSWORD) {
        throw redirect(303, '/admin/waitlist');
    }
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const password = data.get('password');

        if (!password || typeof password !== 'string') {
            return fail(400, { error: 'Password is required' });
        }

        if (password !== ADMIN_PASSWORD) {
            return fail(401, { error: 'Invalid password' });
        }

        cookies.set('admin_session', ADMIN_PASSWORD, {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        });

        throw redirect(303, '/admin/waitlist');
    }
};
