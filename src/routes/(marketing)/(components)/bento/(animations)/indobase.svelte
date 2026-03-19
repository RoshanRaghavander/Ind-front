<script lang="ts">
    import { isMobile } from '$lib/utils/is-mobile';
    import { animate, hover, inView, type AnimationSequence } from 'motion';
    import { onMount } from 'svelte';

    import GridPaper from '../../grid-paper.svelte';
    import { trackEvent } from '$lib/actions/analytics';

    let container: HTMLElement;

    let bigDot: HTMLElement;
    let smallDot: HTMLElement;
    let mainCursor: HTMLElement;

    onMount(() => {
        const from: AnimationSequence = [
            [
                mainCursor,
                { y: -20, x: 32, scale: 1, opacity: 0, filter: 'blur(4px)' },
                { duration: 0.25, at: 0 }
            ],
            [bigDot, { scale: 1 }, { duration: 0.25, at: 0 }],
            [smallDot, { x: 0, y: 0 }, { duration: 0.25, at: 0 }]
        ];

        const to: AnimationSequence = [
            [
                mainCursor,
                { opacity: 1, scale: 0.85, filter: 'blur(0)' },
                { duration: 0.15, at: 0 }
            ],
            [bigDot, { scale: 1.1 }, { duration: 0.3, at: 0.1, type: 'spring' }],
            [smallDot, { x: 12, y: -8 }, { duration: 0.4, at: 0.2, type: 'spring' }],
            [mainCursor, { y: 0, x: 0 }, { duration: 0.15, at: 0.2 }],
            [mainCursor, { scale: 1 }, { duration: 0.25, at: 0.35 }]
        ];

        inView(
            container,
            () => {
                if (!isMobile()) return;
                animate(to);

                return () => {
                    animate(from);
                };
            },
            { amount: 'all' }
        );

        hover(container, () => {
            if (isMobile()) return;
            animate(to);

            return () => {
                animate(from);
            };
        });
    });
</script>

<a
    href="/pricing"
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6 lg:col-span-5"
    onclick={() => {
        trackEvent(`bento-indobase-click`);
    }}
    bind:this={container}
>
    <div class="space-y-3 px-3 pt-2 pb-4">
        <div class="flex items-center gap-2">
            <div class="flex size-7 items-center justify-center rounded-lg bg-[#FF9933]/10">
                <svg width="18" height="18" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="25" r="9" fill="#FF9933" />
                    <circle cx="42" cy="25" r="5" fill="#FF9933" />
                </svg>
            </div>
            <h3 class="font-aeonik-pro text-label text-primary">Indobase</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            <span class="text-secondary">The all-in-one platform</span> designed specifically for the Indian developer ecosystem.
        </p>
    </div>
    <div
        class="relative mt-auto mb-0 flex h-85 items-center justify-center overflow-hidden rounded-xl bg-black/24 px-8"
    >
        <div class="relative flex items-center justify-center gap-12">
            <!-- Big Dot -->
            <div
                bind:this={bigDot}
                class="size-24 rounded-full bg-[#FF9933] shadow-[0_0_40px_rgba(255,153,51,0.3)]"
            ></div>
            
            <!-- Small Dot -->
            <div
                bind:this={smallDot}
                class="size-12 rounded-full bg-[#FF9933] shadow-[0_0_20px_rgba(255,153,51,0.3)]"
            ></div>

            <!-- Connection effect -->
            <div class="absolute inset-0 -z-1 flex items-center justify-center opacity-20">
                <div class="h-1 w-48 bg-linear-to-r from-[#FF9933] to-transparent blur-sm"></div>
            </div>
        </div>

        <!-- Collaborative Cursors -->
        <div
            class="cursor pointer-events-none absolute aspect-square h-12 w-[6rem]"
            style:right="120px"
            style:bottom="40px"
            style:--y="-15px"
            style:--x="-10px"
            style:--duration="3s"
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <path
                        d="M3.59107 1.55945C2.60535 1.2256 2.11248 1.05868 1.78586 1.17445C1.50167 1.27517 1.2781 1.49874 1.17738 1.78293C1.06161 2.10955 1.22853 2.60242 1.56237 3.58814L5.67787 15.7398C6.13991 17.1041 6.37093 17.7862 6.71487 17.9732C7.01244 18.1349 7.37166 18.1351 7.66937 17.9736C8.01347 17.7869 8.24509 17.105 8.70832 15.7411L10.2385 11.236C10.3315 10.962 10.3781 10.825 10.4564 10.7111C10.5258 10.6102 10.6131 10.5228 10.714 10.4535C10.8279 10.3751 10.9649 10.3286 11.2389 10.2356L15.7441 8.70539C17.1079 8.24216 17.7898 8.01055 17.9765 7.66644C18.138 7.36873 18.1379 7.00951 17.9761 6.71194C17.7891 6.368 17.107 6.13698 15.7427 5.67494L3.59107 1.55945Z"
                        fill="#FF9933"
                    />
                </g>
                <defs><clipPath id="clip0"><rect width="20" height="20" fill="white"/></clipPath></defs>
            </svg>
            <div class="bg-[#FF9933] absolute right-0 bottom-0 rounded-r-md rounded-bl-md px-2 py-0.5 font-medium text-black text-xs">
                <span>Indobase Dev</span>
            </div>
        </div>

        <div
            class="pointer-events-none absolute aspect-square h-12 w-[5.5rem]"
            style:top="60px"
            style:left="80px"
            style:transform="translateY(-20px) translateX(32px)"
            style:opacity="0"
            style:filter="blur(4px)"
            bind:this={mainCursor}
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip1)">
                    <path
                        d="M3.59107 1.55945C2.60535 1.2256 2.11248 1.05868 1.78586 1.17445C1.50167 1.27517 1.2781 1.49874 1.17738 1.78293C1.06161 2.10955 1.22853 2.60242 1.56237 3.58814L5.67787 15.7398C6.13991 17.1041 6.37093 17.7862 6.71487 17.9732C7.01244 18.1349 7.37166 18.1351 7.66937 17.9736C8.01347 17.7869 8.24509 17.105 8.70832 15.7411L10.2385 11.236C10.3315 10.962 10.3781 10.825 10.4564 10.7111C10.5258 10.6102 10.6131 10.5228 10.714 10.4535C10.8279 10.3751 10.9649 10.3286 11.2389 10.2356L15.7441 8.70539C17.1079 8.24216 17.7898 8.01055 17.9765 7.66644C18.138 7.36873 18.1379 7.00951 17.9761 6.71194C17.7891 6.368 17.107 6.13698 15.7427 5.67494L3.59107 1.55945Z"
                        fill="var(--color-mint-500)"
                    />
                </g>
                <defs><clipPath id="clip1"><rect width="20" height="20" fill="white"/></clipPath></defs>
            </svg>
            <div class="bg-mint-500 absolute right-0 bottom-0 rounded-r-md rounded-bl-md px-2 py-0.5 font-medium text-black text-xs">
                <span>Admin</span>
            </div>
        </div>

        <GridPaper class="absolute inset-0 -z-10 bg-size-[calc(100%/11)]" />
    </div>
</a>

<style>
    .cursor {
        animation: cursor var(--duration) ease-in-out infinite;
    }

    @keyframes cursor {
        0% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(var(--y)) translateX(var(--x)); }
        100% { transform: translateY(0) translateX(0); }
    }
</style>
