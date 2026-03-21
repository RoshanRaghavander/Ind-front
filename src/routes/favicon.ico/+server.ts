import { redirect } from '@sveltejs/kit';

/** Default browser request; app.html uses SVG; raster lives at /favicon.png. */
export function GET() {
    throw redirect(302, '/favicon.png');
}
