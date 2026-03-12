import { env } from '$env/dynamic/private';
import type { RequestEvent } from '@sveltejs/kit';

export function requireAdmin(event: RequestEvent) {
    const session = event.cookies.get('admin_session');
    
    if (!session || session !== env.ADMIN_PASSWORD || !env.ADMIN_PASSWORD) {
        return false;
    }
    
    return true;
}
