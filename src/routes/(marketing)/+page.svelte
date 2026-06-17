<script lang="ts">
    import { Main } from '$lib/layouts';
    import Head from '$lib/components/meta/head.svelte';
    import GenHero from './(components)/landing/gen-hero.svelte';
    import Bharat from './(components)/landing/bharat.svelte';
    import PreviewSplit from './(components)/landing/preview-split.svelte';
    import FeaturesGrid from './(components)/landing/features-grid.svelte';
    import LandingFooter from './(components)/landing/landing-footer.svelte';
    import { reveal } from './(components)/landing/reveal';
</script>

<Head title="Indobase - Generate your full-stack app" />

<Main>
    <div class="landing">
        <GenHero />

        <div use:reveal>
            <Bharat />
        </div>

        <div use:reveal>
            <PreviewSplit
                variant="mobile"
                eyebrow="Developer experience"
                title="Live-preview split"
                subtitle="See your UI update live as you build, rendered straight from the Indobase database."
                filename="index.js"
            />
        </div>

        <div use:reveal>
            <PreviewSplit
                variant="data"
                eyebrow="Type-safe by default"
                title="Schema to data, instantly"
                subtitle="Define a collection once and get a fully-typed client plus a live data view — no migrations to hand-write."
                filename="models.js"
            />
        </div>

        <div id="features" use:reveal>
            <FeaturesGrid />
        </div>

        <LandingFooter />
    </div>
</Main>

<style>
    .landing {
        position: relative;
        isolation: isolate;
        background-color: #0a0907;
        color: #fff;
    }

    /* atmospheric gold glows layered down the full page (docs-style depth) */
    .landing::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -2;
        pointer-events: none;
        background:
            radial-gradient(1000px 560px at 50% -4%, rgba(255, 153, 51, 0.16), transparent 60%),
            radial-gradient(720px 520px at 10% 16%, rgba(217, 159, 60, 0.12), transparent 55%),
            radial-gradient(780px 540px at 90% 30%, rgba(255, 120, 40, 0.09), transparent 55%),
            radial-gradient(860px 600px at 16% 58%, rgba(214, 170, 92, 0.1), transparent 55%),
            radial-gradient(960px 640px at 84% 82%, rgba(255, 153, 51, 0.11), transparent 55%),
            radial-gradient(900px 600px at 50% 100%, rgba(217, 159, 60, 0.08), transparent 60%);
    }

    /* faint dot texture across the whole page */
    .landing::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        background-image: radial-gradient(rgba(245, 220, 170, 0.05) 1px, transparent 1px);
        background-size: 24px 24px;
        mask-image: radial-gradient(ellipse 100% 70% at 50% 0%, #000 30%, transparent 85%);
        -webkit-mask-image: radial-gradient(ellipse 100% 70% at 50% 0%, #000 30%, transparent 85%);
    }

    /* scroll-reveal (classes toggled by the reveal action) */
    :global(.landing .reveal) {
        opacity: 0;
        transform: translateY(34px);
        transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--reveal-delay, 0ms),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--reveal-delay, 0ms);
        will-change: opacity, transform;
    }
    :global(.landing .reveal.is-visible) {
        opacity: 1;
        transform: none;
    }
</style>
