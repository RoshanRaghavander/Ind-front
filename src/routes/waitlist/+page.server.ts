import type { Actions } from './$types';
import { getDb } from '$lib/server/db';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const company = data.get('company');

        if (!name || typeof name !== 'string') {
            return fail(400, { name, missing: true });
        }

        if (!email || typeof email !== 'string') {
            return fail(400, { email, missing: true });
        }

        try {
            const pool = await getDb();
            
            // Optional: check if email already exists
            const [rows] = await pool.execute('SELECT * FROM waitlist WHERE email = ?', [email]);
            if ((rows as any[]).length > 0) {
                return { success: true, message: 'Already on the waitlist!' }; 
            }

            await pool.execute(
                'INSERT INTO waitlist (name, email, company, createdAt) VALUES (?, ?, ?, ?)',
                [name, email, company ? String(company) : null, new Date()]
            );

            return { success: true };
        } catch (error) {
            console.error('Failed to insert into waitlist:', error);
            return fail(500, { error: 'Internal server error' });
        }
    }
} satisfies Actions;
