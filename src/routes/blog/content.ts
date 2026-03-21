/** Shared blog types for markdoc layouts and utilities (data loaded via +layout). */
export interface AuthorData {
    slug: string;
    name: string;
    href: string;
    avatar?: string;
    role?: string;
}

export interface PostsData {
    title: string;
    href: string;
    cover: string;
    date: string;
    timeToRead: string;
    author: string | string[];
    category: string[];
    unlisted?: boolean;
    draft?: boolean;
}
