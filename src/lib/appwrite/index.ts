import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';
import { Client, Databases, Functions, Storage } from '@appwrite.io/console';

export const client = new Client();

const endpoint = PUBLIC_APPWRITE_ENDPOINT ?? '';
const projectId = PUBLIC_APPWRITE_PROJECT_ID ?? '';

if (endpoint && projectId) {
    client.setEndpoint(endpoint).setProject(projectId);
}

export const databases = new Databases(client);
export const functions = new Functions(client);
export const storage = new Storage(client);
