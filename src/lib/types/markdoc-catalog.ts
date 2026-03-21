/** Types for markdoc layouts; pages under /integrations and /partners may be absent in this tree. */

export interface Partner {
    title: string;
    partnerLevel: string;
    category: string;
    description: string;
    cover: string;
    services: string[];
    technologies: string[];
    regions: string[];
    languages: string[];
    website: string;
    email: string;
}

export interface Integration {
    title: string;
    images: string[];
    isPartner: boolean;
    product: { avatar: string; vendor: string };
    category: string;
    description: string;
    cover: string;
}
