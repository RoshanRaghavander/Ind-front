import { getUtmSourceForLink } from '$lib/utils/utm';

export function getAppwriteDashboardUrl(path = ''): string {
    const utmParams = getUtmSourceForLink();

    if (!path) {
        return '/';
    }

    if (!utmParams) {
        return path;
    }

    const separator = path.includes('?') ? '&' : '?';
    return `${path}${separator}${utmParams}`;
}
