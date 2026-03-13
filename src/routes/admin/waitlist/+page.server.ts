import type { PageServerLoad, Actions } from './$types';
import { getDb } from '$lib/server/db';
import { fail, redirect } from '@sveltejs/kit';
import { requireAdmin } from '$lib/server/auth';

export const load: PageServerLoad = async (event) => {
    if (!requireAdmin(event)) {
        throw redirect(303, '/admin/login');
    }
    try {
        const pool = await getDb();
        const [rows] = await pool.execute('SELECT * FROM waitlist ORDER BY createdAt DESC');
        const entries = rows as any[];

        return {
            waitlist: entries.map(entry => ({
                id: entry.id.toString(),
                name: entry.name,
                email: entry.email,
                company: entry.company,
                createdAt: entry.createdAt
            }))
        };
    } catch (e) {
        console.error("Failed to load waitlist:", e);
        return {
            waitlist: [],
            error: "Failed to connect to the database."
        };
    }
};

export const actions: Actions = {
    delete: async (event) => {
        if (!requireAdmin(event)) return fail(401, { error: 'Unauthorized' });
        
        const data = await event.request.formData();
        const id = data.get('id');

        if (!id || typeof id !== 'string') return fail(400, { missing: true });

        try {
            const pool = await getDb();
            await pool.execute('DELETE FROM waitlist WHERE id = ?', [id]);
            return { success: true };
        } catch (e) {
            console.error(e);
            return fail(500, { error: 'Failed to delete entry.' });
        }
    },
    edit: async (event) => {
        if (!requireAdmin(event)) return fail(401, { error: 'Unauthorized' });

        const data = await event.request.formData();
        const id = data.get('id');
        const name = data.get('name');
        const email = data.get('email');
        const company = data.get('company');

        if (!id || typeof id !== 'string') return fail(400, { missingId: true });
        if (!name || typeof name !== 'string') return fail(400, { missingName: true });
        if (!email || typeof email !== 'string') return fail(400, { missingEmail: true });

        try {
            const pool = await getDb();
            await pool.execute(
                'UPDATE waitlist SET name = ?, email = ?, company = ? WHERE id = ?',
                [name, email, company ? String(company) : null, id]
            );
            return { success: true };
        } catch (e) {
            console.error(e);
            return fail(500, { error: 'Failed to update entry.' });
        }
    }
};
