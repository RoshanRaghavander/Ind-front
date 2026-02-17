<script lang="ts">
    import { Carousel } from '$lib/components';
    import Technologies from '$lib/components/Technologies.svelte';
    import { Button } from '$lib/components/ui';
    import Docs from '$lib/layouts/Docs.svelte';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import MainFooter from '../../lib/components/MainFooter.svelte';
    import CodeCard, { type CodeCardProps } from './CodeCard.svelte';
    import Sidebar from './Sidebar.svelte';
    import { trackEvent } from '$lib/actions/analytics';
    import Platforms from '$routes/(marketing)/(components)/platforms.svelte';
    import HeroBanner from '$routes/(marketing)/(components)/hero-banner.svelte';

    const title = 'Indobase Docs' + TITLE_SUFFIX;
    const description =
        'Learn how to build like a team of hundreds on Indobase. Get started with Auth, Database, Storage, Functions, Realtime, Messaging, and Hosting in your preferred framework.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/docs.png';

    const tutorials: CodeCardProps[] = [
        {
            href: '/docs/tutorials/react',
            cover: '/images/tutorials/react.png',
            title: 'React tutorial',
            description: 'Learn Indobase Auth, Databases, and more with React.'
        },
        {
            href: '/docs/tutorials/nextjs',
            cover: '/images/tutorials/nextjs.png',
            title: 'Next.js tutorial',
            description: 'Learn Indobase Auth, Databases, and more with Next.js.'
        },
        {
            href: '/docs/tutorials/sveltekit',
            cover: '/images/tutorials/svelte.png',
            title: 'SvelteKit tutorial',
            description: 'Learn Indobase Auth, Databases, and more with SvelteKit.'
        },
        {
            href: '/docs/tutorials/vue',
            cover: '/images/tutorials/vue.png',
            title: 'Vue tutorial',
            description: 'Learn Indobase Auth, Databases, and more with Vue.'
        },
        {
            href: '/docs/tutorials/android',
            cover: '/images/tutorials/android.png',
            title: 'Android tutorial',
            description: 'Learn Indobase Auth, Databases, and more with Android.'
        },
        {
            href: '/docs/tutorials/flutter',
            cover: '/images/tutorials/flutter.png',
            title: 'Flutter tutorial',
            description: 'Learn Indobase Auth, Databases, and more with Flutter.'
        }
    ];
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Docs variant="default">
    <Sidebar />

    <main class="web-main-section relative overflow-x-hidden" id="main">
        <div class="absolute translate-x-96">
            <img src="/images/bgs/docs-blur-1.svg" alt="" />
        </div>

        <div class="web-u-opacity-40-mobile absolute top-4 left-0">
            <enhanced:img src="./blur-2.png" alt="" />
        </div>

        <section class="web-hero is-align-start e-hero-docs relative">
            <HeroBanner title="Indobase Docs" href="/docs/quick-starts" />
            <h1 class="text-display font-aeonik-pro text-primary max-w-[600px]">
                Build modern apps with Indobase<span class="web-u-color-text-accent">_ </span>
            </h1>
            <p class="text-description max-w-[600px]">
                Indobase gives you a unified backend platform for Postgres, auth, storage, messaging,
                and hosting. Use these docs to go from first prototype to production‑ready infra without
                getting lost in low‑level cloud details.
            </p>

            <Button variant="secondary" href="/docs/quick-starts" class="mt-8"
                >Quickstart guides</Button
            >
        </section>
        <Platforms padded={false} class="mt-12! p-0! max-md:p-0!" />
        <section class="mt-12!">
            <h2 class="text-title font-aeonik-pro text-primary max-w-[600px]">Show me some code</h2>
            <p class="text-description mt-4 max-w-[600px]">
                If you learn best from code examples, follow one of our tutorials.
            </p>
            <Carousel size="medium">
                {#each tutorials as tutorial}
                    <li style:scroll-snap-align="start">
                        <CodeCard {...tutorial} />
                    </li>
                {/each}
            </Carousel>
        </section>
        <section class="web-hero is-align-start is-no-max-width mt-12!">
            <h2 class="text-title font-aeonik-pro text-primary max-w-[600px]">
                Core Indobase platform
            </h2>
            <p class="text-description max-w-[600px]">
                Indobase brings together Postgres, Auth, Storage, Realtime, and Functions into a single,
                opinionated platform tuned for Indian startups. Explore the building blocks behind every
                Indobase project.
            </p>
            <div class="mt-6">
                <ul class="web-grid-row-4 web-grid-row-4-m-1">
                    <li>
                        <a
                            href="/docs/products/auth"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_auth-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/auth.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/auth.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Auth</h4>
                            <p class="text-sub-body mt-1">
                                Email/password, passwordless, and OAuth logins with strong policies to
                                keep your users and data secure.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/databases"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_databases-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/databases.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/databases.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Database</h4>
                            <p class="text-sub-body mt-1">
                                A dedicated Postgres database for every project with backups, extensions,
                                and realtime change streams.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/functions"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_functions-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/functions.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/functions.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Functions</h4>
                            <p class="text-sub-body mt-1">
                                Edge functions to run backend logic close to your users and react to
                                events from your data.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/sites"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_sites-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/sites.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/sites.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Sites</h4>
                            <p class="text-sub-body mt-1">
                                Deploy static sites and full‑stack apps on Indobase’s global hosting
                                platform.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/messaging"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_messaging-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/messaging.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/messaging.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Messaging</h4>
                            <p class="text-sub-body mt-1">
                                Orchestrate email, SMS, and push from a single API wired into your
                                Indobase project data.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/storage"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_storage-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/storage.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/storage.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Storage</h4>
                            <p class="text-sub-body mt-1">
                                Store and serve large files, fully integrated with Postgres and protected
                                by row‑level security.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/avatars"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_avatars-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/avatars.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/avatars.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Avatars</h4>
                            <p class="text-sub-body mt-1">
                                Generate icons, screenshots, and QR codes backed by your Indobase data.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/apis/realtime"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_realtime-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/realtime.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/realtime.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Realtime</h4>
                            <p class="text-sub-body mt-1">
                                Listen to database changes, sync user state, and broadcast live updates
                                to connected clients.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="web-hero is-align-start is-no-max-width mt-12!">
            <h2 class="text-title font-aeonik-pro text-primary max-w-[600px]">
                Build faster with AI
            </h2>
            <p class="text-description max-w-[600px]">
                Indobase’s Model Context Protocol (MCP) server lets LLMs interact directly with your
                Indobase API.
            </p>
            <div class="mt-6">
                <ul class="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <li>
                        <a
                            href="/docs/tooling/mcp/claude-desktop"
                            class="web-card is-normal flex flex-row! items-center gap-2!"
                            onclick={() => trackEvent(`docs-mcp-click`)}
                        >
                            <img
                                src="/images/docs/mcp/logos/dark/claude.svg"
                                alt="Claude"
                                class="w-6"
                            />
                            <h4 class="text-sub-body text-primary font-medium">Claude Desktop</h4>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/tooling/mcp/claude-code"
                            class="web-card is-normal flex flex-row! items-center gap-2!"
                            onclick={() => trackEvent(`docs-mcp-click`)}
                        >
                            <img
                                src="/images/docs/mcp/logos/dark/claude.svg"
                                alt="Claude"
                                class="w-6"
                            />
                            <h4 class="text-sub-body text-primary font-medium">Claude Code</h4>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/tooling/mcp/cursor"
                            class="web-card is-normal flex flex-row! items-center gap-2!"
                            onclick={() => trackEvent(`docs-mcp-click`)}
                        >
                            <img
                                src="/images/docs/mcp/logos/dark/cursor-ai.svg"
                                alt="Cursor"
                                class="w-6"
                            />
                            <h4 class="text-sub-body text-primary font-medium">Cursor</h4>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/tooling/mcp/windsurf"
                            class="web-card is-normal flex flex-row! items-center gap-2!"
                            onclick={() => trackEvent(`docs-mcp-click`)}
                        >
                            <img
                                src="/images/docs/mcp/logos/dark/windsurf.svg"
                                alt="Windsurf"
                                class="w-6"
                            />
                            <h4 class="text-sub-body text-primary font-medium">Windsurf Editor</h4>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/tooling/mcp/vscode"
                            class="web-card is-normal flex flex-row! items-center gap-2!"
                            onclick={() => trackEvent(`docs-mcp-click`)}
                        >
                            <img
                                src="/images/docs/mcp/logos/dark/vscode.svg"
                                alt="VS Code"
                                class="w-6"
                            />
                            <h4 class="text-sub-body text-primary font-medium">VS Code</h4>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/tooling/mcp/opencode"
                            class="web-card is-normal flex flex-row! items-center gap-2!"
                            onclick={() => trackEvent(`docs-mcp-click`)}
                        >
                            <img
                                src="/images/docs/mcp/logos/dark/opencode.svg"
                                alt="OpenCode"
                                class="w-6"
                            />
                            <h4 class="text-sub-body text-primary font-medium">OpenCode</h4>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/tooling/mcp/antigravity"
                            class="web-card is-normal flex flex-row! items-center gap-2!"
                            onclick={() => trackEvent(`docs-mcp-click`)}
                        >
                            <img
                                src="/images/docs/mcp/logos/dark/google-antigravity.svg"
                                alt="Google Antigravity"
                                class="w-6"
                            />
                            <h4 class="text-sub-body text-primary font-medium">
                                Google Antigravity
                            </h4>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="web-hero is-align-start is-no-max-width mt-12!">
            <h2 class="text-title font-aeonik-pro text-primary max-w-[600px]">
                Explore ways to integrate
            </h2>
            <p class="text-description max-w-[600px]">
                Choose how you integrate with Indobase. Explore references for the Indobase SDK,
                REST API, GraphQL API, or Realtime API.
            </p>
            <div class="mt-6">
                <ul class="web-grid-row-2">
                    <li>
                        <a
                            href="/docs/sdks"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-explore_sdks-click`)}
                        >
                            <h4 class="text-sub-body text-primary font-medium">SDKs</h4>
                            <p class="text-sub-body mt-1">
                                Light-weight SDKs for your favorite platforms.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/apis/rest"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-explore_rest_apis-click`)}
                        >
                            <h4 class="text-sub-body text-primary font-medium">REST API</h4>
                            <p class="text-sub-body mt-1">
                                Integrate with HTTP requests without needing an SDK.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/apis/graphql"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-explore_graphql_apis-click`)}
                        >
                            <h4 class="text-sub-body text-primary font-medium">GraphQL</h4>
                            <p class="text-sub-body mt-1">
                                Leverage GraphQL through our SDKs or integrate directly with REST
                                endpoints.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/apis/realtime"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-explore_realtime_apis-click`)}
                        >
                            <h4 class="text-sub-body text-primary font-medium">Realtime</h4>
                            <p class="text-sub-body mt-1">
                                Respond to auth, databases, storage, and function events in
                                realtime.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="web-hero is-align-start is-no-max-width mt-12!">
            <h2 class="text-title font-aeonik-pro text-primary max-w-[600px]">
                Migrate to Indobase
            </h2>
            <p class="text-description max-w-[600px]">
                Own your data with automatic data migrations.
            </p>
            <div class="mt-6">
                <ul class="web-grid-row-4">
                    <li>
                        <a
                            href="/docs/advanced/migrations/self-hosted"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-migrations_self_hosted-click`)}
                        >
                            <h4 class="text-sub-body text-primary font-medium">Self-hosted</h4>
                            <p class="text-sub-body mt-1">
                                Move data from self-hosted to Indobase Cloud.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/advanced/migrations/firebase"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-migrations_firebase-click`)}
                        >
                            <h4 class="text-sub-body text-primary font-medium">Firebase</h4>
                            <p class="text-sub-body mt-1">
                                Migrate users and data from Firebase to Indobase.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/advanced/migrations/supabase"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-migrations_supabase-click`)}
                        >
                            <h4 class="text-sub-body text-primary font-medium">Supabase</h4>
                            <p class="text-sub-body mt-1">
                                Migrate users and data from Supabase to Indobase.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/advanced/migrations/nhost"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-migrations_nhost-click`)}
                        >
                            <h4 class="text-sub-body text-primary font-medium">Nhost</h4>
                            <p class="text-sub-body mt-1">
                                Migrate users and data from NHost to Indobase.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

        <MainFooter variant="docs" />
    </main>
</Docs>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .e-hero-docs {
        @media (min-width: 1280px) {
            margin-block-start: 5rem;
        }
    }
    .web-main-section {
        max-inline-size: unset;
        margin-inline: unset;
        @media (min-width: 1280px) {
            padding-inline-start: 3rem; // 48px
        }
    }
</style>
