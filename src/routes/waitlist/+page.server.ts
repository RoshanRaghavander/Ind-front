import type { Actions } from './$types';
import { getWaitlistCollection } from '$lib/server/db';
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
            const collection = await getWaitlistCollection();
            
            // Optional: check if email already exists
            const existingEntry = await collection.findOne({ email });
            if (existingEntry) {
                return { success: true, message: 'Already on the waitlist!' }; 
            }

            await collection.insertOne({
                name,
                email,
                company: company ? String(company) : null,
                createdAt: new Date()
            });

            return { success: true };
        } catch (error) {
            console.error('Failed to insert into waitlist:', error);
            return fail(500, { error: 'Internal server error' });
        }
    }
} satisfies Actions;
