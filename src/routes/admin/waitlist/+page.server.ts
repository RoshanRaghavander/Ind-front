import type { PageServerLoad, Actions } from './$types';
import { getWaitlistCollection } from '$lib/server/db';
import { ObjectId } from 'mongodb';
import { fail, redirect } from '@sveltejs/kit';
import { requireAdmin } from '$lib/server/auth';

export const load: PageServerLoad = async (event) => {
    if (!requireAdmin(event)) {
        throw redirect(303, '/admin/login');
    }
    try {
        const collection = await getWaitlistCollection();
        const entries = await collection.find({}).sort({ createdAt: -1 }).toArray();

        return {
            waitlist: entries.map(entry => ({
                id: entry._id.toString(),
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
            const collection = await getWaitlistCollection();
            await collection.deleteOne({ _id: new ObjectId(id) });
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
            const collection = await getWaitlistCollection();
            await collection.updateOne(
                { _id: new ObjectId(id) },
                {
                    $set: {
                        name,
                        email,
                        company: company ? String(company) : null,
                    }
                }
            );
            return { success: true };
        } catch (e) {
            console.error(e);
            return fail(500, { error: 'Failed to update entry.' });
        }
    }
};
