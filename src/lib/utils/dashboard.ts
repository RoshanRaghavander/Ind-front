import { getUtmSourceForLink } from '$lib/utils/utm';
import { env as publicEnv } from '$env/dynamic/public';

const DEFAULT_BASE = 'https://console.indobase.fun';
const ENV_BASE = (publicEnv.PUBLIC_APPWRITE_DASHBOARD || DEFAULT_BASE).replace(/\/$/, '');
const DASHBOARD_BASE = ENV_BASE.startsWith('http://localhost') ? DEFAULT_BASE : ENV_BASE;

export function getAppwriteDashboardUrl(path = ''): string {
    const utmParams = getUtmSourceForLink();

    const base = DASHBOARD_BASE;

    const resolvedPath = path
        ? `${base}${path.startsWith('/') ? path : `/${path}`}`
        : base;

    if (!utmParams) {
        return resolvedPath;
    }

    const separator = resolvedPath.includes('?') ? '&' : '?';
    return `${resolvedPath}${separator}${utmParams}`;
}
