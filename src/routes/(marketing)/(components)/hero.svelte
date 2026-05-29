<script lang="ts">
    import { getIndobaseDashboardUrl } from '$lib/utils/dashboard';
    import { trackEvent } from '$lib/actions/analytics';

    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';
    import Dashboard from './dashboard.svelte';

    type Props = {
        title?: string;
        subtitle?: string;
    };

    const DASHBOARD_SIGN_UP_URL = getIndobaseDashboardUrl('/dashboard/sign-up');

    const {
        title = 'Your idea deserves to be live today.',
        subtitle = "India's only platform where you can describe your app, build the backend, and launch from one dashboard. DPDP-compliant. INR-priced. Data never leaves India."
    }: Props = $props();

    const trustSignals = [
        'Free forever to start',
        'No credit card',
        'DPDP compliant',
        'India data residency',
        'SOC-2 certified'
    ];
</script>

<div class="relative flex max-w-screen items-center overflow-hidden py-12 md:py-0 lg:min-h-[700px]">
    <div
        class={cn(
            'animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full',
            'bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(255,_219,_88,_0.2)_0%,_rgba(255,_219,_88,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(255,_219,_88,_0.08)_0%,_rgba(255,_219,_88,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(255,_219,_88,_0.08)_0%,_rgba(255,_219,_88,_0)_70%)]',
            'bg-position-[0%_0%]'
        )}
    ></div>

    <div
        class="relative container mx-auto grid h-full grid-cols-1 place-items-center gap-24 md:grid-cols-2"
    >
        <div
            class="animate-blur-in flex flex-col gap-4 [animation-delay:150ms] [animation-duration:1000ms] md:ml-12 lg:ml-0"
        >
            <div class="flex flex-wrap gap-2">
                <span class="text-caption rounded-full border border-dashed border-white/12 px-3 py-1.5 text-primary">
                    India's Full-Stack Launch Platform
                </span>
                <span class="text-caption rounded-full border border-dashed border-white/12 px-3 py-1.5 text-primary">
                    No-code builder + production backend
                </span>
            </div>

            <h1 class="font-aeonik-pro text-headline text-pretty text-primary animate-fade-in">
                {title}<span class="text-accent">_</span>
            </h1>

            <p class="text-description text-secondary font-medium">
                {subtitle}
            </p>

            <div class="mt-4 flex flex-col gap-2 lg:flex-row">
                <Button
                    href={DASHBOARD_SIGN_UP_URL}
                    class="w-full! lg:w-fit!"
                    onclick={() => {
                        trackEvent(`main-start_building_free_hero-click`);
                    }}>Start Building Free</Button>
                <Button
                    href="#builder-showcase"
                    variant="secondary"
                    class="w-full! lg:w-fit!"
                    onclick={() => {
                        trackEvent(`main-view_demo_hero-click`);
                    }}>Watch 2-min demo</Button>
            </div>

            <a
                href="/docs"
                class="text-caption text-secondary hover:text-primary mt-1 font-medium transition-colors"
            >
                Prefer code? View Docs.
            </a>

            <div class="mt-2 flex flex-wrap gap-2">
                {#each trustSignals as signal}
                    <span class="text-caption rounded-full border border-dashed border-white/12 px-3 py-1.5 text-primary">
                        {signal}
                    </span>
                {/each}
            </div>
        </div>
        <Dashboard />
    </div>
</div>
