<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import Auth from './(animations)/auth.svelte';
    import Databases from './(animations)/databases.svelte';
    import Functions from './(animations)/functions.svelte';
    import Realtime from './(animations)/realtime.svelte';
    import Storage from './(animations)/storage.svelte';
    import Indobase from './(animations)/indobase.svelte';

    const build = [
        {
            label: 'Auth',
            icon: '/images/icons/illustrated/dark/auth.png',
            href: '/pricing'
        },
        {
            label: 'Databases',
            icon: '/images/icons/illustrated/dark/databases.png',
            href: '/pricing'
        },
        {
            label: 'Storage',
            icon: '/images/icons/illustrated/dark/storage.png',
            href: '/pricing'
        },
        {
            label: 'Functions',
            icon: '/images/icons/illustrated/dark/functions.png',
            href: '/pricing'
        },
        {
            label: 'Realtime',
            icon: '/images/icons/illustrated/dark/realtime.png',
            href: '/pricing'
        },
        {
            label: 'SQL',
            icon: '/images/icons/illustrated/dark/databases.png',
            href: '/pricing'
        }
    ];

    const deploy = [
        {
            label: 'Studio',
            icon: '/images/icons/illustrated/dark/sites.png',
            href: 'https://studio.indobase.in'
        }
    ];
</script>

<div id="product-platform" class="container py-20">
    <div class="mx-auto mb-16 flex max-w-5xl flex-col gap-8">
        <div class="mx-auto max-w-4xl text-center">
            <p class="text-caption text-secondary font-medium uppercase">Product features</p>
            <h2 class="text-primary font-aeonik-pro text-title mx-auto mt-4 max-w-3xl text-center">
                Everything your app needs. Nothing you don't.
            </h2>
            <p class="text-description text-secondary mx-auto mt-4 max-w-3xl font-medium">
                From your first line of logic to your millionth user, Indobase gives you the
                backend, deployment, and builder workflows to ship from one platform.
            </p>
        </div>

        <div class="hidden justify-between gap-8 lg:flex">
            <div
                class={cn(
                    'bg-card border-smooth text-primary relative flex h-10 items-center gap-4 rounded-full border border-dashed p-1 text-sm',
                    'after:border-smooth after:absolute after:top-1/2 after:-right-22 after:h-px after:w-22 after:-translate-y-1/2 after:border-b after:border-dashed'
                )}
            >
                <span class="text-eyebrow text-secondary font-aeonik-fono ml-3 uppercase"
                    >Build</span
                >
                <div class="flex h-full w-full justify-between gap-2">
                    {#each build as product}
                        <a
                            href={product.href}
                            class="bg-greyscale-800 hover:bg-greyscale-750/50 flex h-full w-fit items-center justify-center gap-2 rounded-full px-3 backdrop-blur-lg transition-opacity"
                        >
                            <span
                                class="text-primary text-caption flex items-center justify-center gap-1 font-medium"
                            >
                                <img
                                    loading="lazy"
                                    src={product.icon}
                                    alt={product.label}
                                    class="size-6"
                                />
                                {product.label}</span
                            >
                        </a>
                    {/each}
                </div>
            </div>

            <div
                class="bg-card border-smooth text-primary flex h-10 items-center gap-4 rounded-full border border-dashed p-1 text-sm"
            >
                <span class="text-eyebrow text-secondary font-aeonik-fono ml-3 uppercase"
                    >Deploy</span
                >
                <div class="flex h-full w-full justify-between gap-2">
                    {#each deploy as product}
                        <a
                            href={product.href}
                            class="bg-greyscale-800 hover:bg-greyscale-750/50 flex h-full w-fit items-center justify-center gap-2 rounded-full px-3 backdrop-blur-lg transition-opacity"
                        >
                            <span
                                class="text-primary text-caption flex items-center justify-center gap-1 font-medium"
                            >
                                <img
                                    loading="lazy"
                                    src={product.icon}
                                    alt={product.label}
                                    class="size-6"
                                />
                                {product.label}</span
                            >
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-8 md:grid md:grid-cols-12">
        <Auth />
        <Databases />
        <Storage />
        <Functions />
        <Realtime />
        <Indobase />
    </div>
</div>
