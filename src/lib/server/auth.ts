import { ADMIN_PASSWORD } from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';

export function requireAdmin(event: RequestEvent) {
    const session = event.cookies.get('admin_session');
    
    if (!session || session !== ADMIN_PASSWORD || !ADMIN_PASSWORD) {
        return false;
    }
    
    return true;
}
