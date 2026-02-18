import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import { Client, Account, Databases } from 'node-appwrite';
import type { RequestEvent } from '../$types';
import { cookieKey } from './auth';
import type { Cookies } from '@sveltejs/kit';
import { env as privateEnv } from '$env/dynamic/private';

export const createInitServerClient = () => {
    const endpoint = PUBLIC_APPWRITE_ENDPOINT ?? '';
    const projectId = PUBLIC_APPWRITE_PROJECT_INIT_ID ?? '';
    const apiKey = privateEnv.APPWRITE_API_KEY_INIT ?? '';

    const client = new Client();

    if (endpoint && projectId && apiKey) {
        client.setEndpoint(endpoint).setProject(projectId).setKey(apiKey);
    }

    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        }
    };
};

export const createInitSessionClient = async (cookies: Cookies) => {
    const endpoint = PUBLIC_APPWRITE_ENDPOINT ?? '';
    const projectId = PUBLIC_APPWRITE_PROJECT_INIT_ID ?? '';

    if (!endpoint || !projectId) {
        return;
    }

    const client = new Client();
    client.setEndpoint(endpoint).setProject(projectId);

    const session = cookies.get(cookieKey);
    if (!session) return;

    client.setSession(session);
    return {
        get account() {
            return new Account(client);
        }
    };
};
