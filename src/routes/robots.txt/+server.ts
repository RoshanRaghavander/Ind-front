export function GET() {
    const body = `User-agent: *
Allow: /

# Machine-readable product summary for LLMs and search
# https://indobase.in/llms.txt

Sitemap: https://indobase.in/sitemap.xml
`;

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400'
        }
    });
}
