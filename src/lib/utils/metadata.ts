import type { AuthorData } from '$routes/blog/content';

export const DEFAULT_HOST = 'https://indobase.in';
export const DEFAULT_DESCRIPTION =
    "Build and launch real apps in hours on India's only DPDP-compliant, INR-priced full-stack platform. No-code builder plus production backend. Data never leaves India.";

/**
 * Generates an Open Graph image URL.
 */
export function buildOpenGraphImage(title: string, description: string): string {
    return `${DEFAULT_HOST}/images/open-graph/website.png`;
}

/**
 * Returns an inlined JSON-LD script tag without breaking IDE formatting.
 */
export function getInlinedScriptTag(jsonSchema: string): string {
    return `<script type="application/ld+json">${jsonSchema}</` + 'script>';
}

/**
 * Returns the JSON-LD schema for the Indobase organization.
 */
export function organizationJsonSchema() {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url: 'https://indobase.in',
        sameAs: [
            'https://www.linkedin.com/company/indobase',
            'https://github.com/indobase/indobase',
            'https://www.producthunt.com/products/indobase',
            'https://x.com/indobase'
        ],
        name: 'Indobase',
        legalName: 'Indobase Technologies Ltd.',
        description:
            "India's full-stack launch platform for building, launching, and scaling apps with a no-code builder, production backend, INR pricing, and India data residency.",
        logo: 'https://indobase.in/assets/logotype/indobase-white.png'
    });
}

/**
 * Returns the JSON-LD schema for the Indobase software application.
 */
export function softwareAppSchema() {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Indobase',
        applicationCategory: 'BusinessApplication',
        featureList:
            'No-code builder, Authentication, Database, Storage, Functions, Messaging, Hosting, DPDP compliance, India data residency',
        audience: {
            '@type': 'Audience',
            audienceType: 'Founders, developers, startups, agencies, and enterprise teams in India'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            bestRating: '5',
            ratingValue: '4.8',
            ratingCount: '74'
        }
    });
}

/**
 * Returns the JSON-LD schema for a blog post.
 */
export function createPostSchema(
    post: { title: string; cover: string; date: string; lastUpdated?: string },
    authors?: AuthorData | AuthorData[]
) {
    const authorsArray = Array.isArray(authors) ? authors : authors ? [authors] : [];

    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: [post.cover],
        datePublished: post.date,
        ...(post.lastUpdated && { dateModified: post.lastUpdated }),
        ...(authorsArray.length > 0 && {
            author: authorsArray.map((author) => ({
                '@type': 'Person',
                url: author.href,
                name: author.name
            }))
        })
    });
}

/**
 * Returns the JSON-LD schema for breadcrumbs.
 */
export function createBreadcrumbsSchema(articleInfo: {
    title: string;
    category: string;
    url: string;
}): string {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Blog',
                item: 'https://indobase.in/blog'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: articleInfo.category,
                item: `https://indobase.in/blog?category=${articleInfo.category}`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: articleInfo.title,
                item: articleInfo.url
            }
        ]
    });
}

/**
 * Returns the JSON-LD schema for faqs.
 */
export function createFaqSchema(
    faqs: Array<{
        question: string;
        answer: string;
    }>
): string {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    });
}
