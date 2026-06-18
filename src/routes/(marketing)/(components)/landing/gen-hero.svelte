<script lang="ts">
    import { getIndobaseDashboardUrl } from '$lib/utils/dashboard';
    import { trackEvent } from '$lib/actions/analytics';
    import FeaturePill from './feature-pill.svelte';

    const DASHBOARD_URL = getIndobaseDashboardUrl();

    let idea = $state('');
</script>

<section class="relative overflow-hidden">
    <!-- perspective diamond grid -->
    <div class="grid-wrap pointer-events-none absolute inset-0 -z-20">
        <div class="grid-bg"></div>
    </div>
    <!-- ambient glows -->
    <div
        class="pointer-events-none absolute top-[-12%] left-1/2 -z-10 h-[460px] w-[900px] -translate-x-1/2 rounded-full blur-[130px]"
        style="background: radial-gradient(ellipse at center, rgba(255,153,51,0.22), rgba(255,153,51,0) 70%);"
    ></div>
    <div
        class="pointer-events-none absolute top-[30%] left-[8%] -z-10 h-[300px] w-[300px] rounded-full blur-[120px]"
        style="background: radial-gradient(circle, rgba(217,159,60,0.14), transparent 70%);"
    ></div>

    <div class="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-36">
        <!-- floating cards: desktop absolute, mobile flow -->
        <div class="pointer-events-none absolute inset-0 hidden lg:block">
            <div class="pointer-events-auto absolute top-[13%] left-[1%] -rotate-[7deg]">
                <FeaturePill title="Auth & Users" delay={0}>
                    {#snippet icon()}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 20a8 8 0 0 1 16 0"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </svg>
                    {/snippet}
                </FeaturePill>
            </div>
            <div class="pointer-events-auto absolute top-[54%] left-[5%] -rotate-[4deg]">
                <FeaturePill title="Edge Functions" delay={1.5}>
                    {#snippet icon()}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path
                                d="m9 8-4 4 4 4m6-8 4 4-4 4"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    {/snippet}
                </FeaturePill>
            </div>
            <div class="pointer-events-auto absolute top-[11%] right-[1%] rotate-[7deg]">
                <FeaturePill title="Real-time Database" delay={0.8}>
                    {#snippet icon()}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" stroke-width="2" />
                            <path
                                d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"
                                stroke="currentColor"
                                stroke-width="2"
                            />
                        </svg>
                    {/snippet}
                </FeaturePill>
            </div>
            <div class="pointer-events-auto absolute top-[55%] right-[5%] rotate-[4deg]">
                <FeaturePill title="Storage" delay={2.2}>
                    {#snippet icon()}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linejoin="round"
                            />
                        </svg>
                    {/snippet}
                </FeaturePill>
            </div>
        </div>

        <!-- center content -->
        <div class="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
            <span
                class="mb-7 inline-flex items-center gap-2 rounded-full border border-[rgba(214,170,92,0.3)] bg-[rgba(30,24,14,0.6)] px-3.5 py-1.5 text-xs font-medium text-[#f0d6a4] backdrop-blur"
            >
                <span class="size-1.5 rounded-full bg-accent"></span>
                The full-stack platform for Bharat
            </span>

            <h1
                class="font-aeonik-pro text-[2.9rem] leading-[1.04] font-bold tracking-tight text-white md:text-[4rem]"
            >
                <span class="gradient-gold">Generate</span> Full-Stack App
            </h1>
            <p class="mt-5 max-w-md text-base text-greyscale-300 md:text-lg">
                Describe your idea and Indobase scaffolds the auth, database, storage and APIs in
                seconds.
            </p>

            <div class="input-card group mt-10 w-full max-w-lg rounded-[20px] p-[1.5px]">
                <div class="rounded-[19px] bg-[rgba(16,14,11,0.85)] p-2.5 backdrop-blur">
                    <textarea
                        bind:value={idea}
                        rows="3"
                        placeholder="Describe your app idea..."
                        class="w-full resize-none rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-greyscale-500 focus:outline-none"
                    ></textarea>
                    <div class="flex items-center justify-between px-2 pb-1">
                        <span class="text-xs text-greyscale-600">Powered by Indobase AI</span>
                        <a
                            href={DASHBOARD_URL}
                            onclick={() => trackEvent('main-generate_app_btn_hero-click')}
                            class="gold-btn inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-[#2a1c04]"
                        >
                            Generate
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                ><path
                                    d="M5 12h14m-6-6 6 6-6 6"
                                    stroke="currentColor"
                                    stroke-width="2.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                /></svg
                            >
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- mobile cards -->
        <div class="mt-14 grid grid-cols-2 gap-4 lg:hidden">
            <FeaturePill title="Auth & Users" class="w-full!" delay={0}>
                {#snippet icon()}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                        ><path
                            d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 20a8 8 0 0 1 16 0"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                        /></svg
                    >
                {/snippet}
            </FeaturePill>
            <FeaturePill title="Real-time Database" class="w-full!" delay={0.8}>
                {#snippet icon()}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                        ><ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" stroke-width="2" /><path
                            d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"
                            stroke="currentColor"
                            stroke-width="2"
                        /></svg
                    >
                {/snippet}
            </FeaturePill>
            <FeaturePill title="Edge Functions" class="w-full!" delay={1.5}>
                {#snippet icon()}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                        ><path
                            d="m9 8-4 4 4 4m6-8 4 4-4 4"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        /></svg
                    >
                {/snippet}
            </FeaturePill>
            <FeaturePill title="Storage" class="w-full!" delay={2.2}>
                {#snippet icon()}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                        ><path
                            d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linejoin="round"
                        /></svg
                    >
                {/snippet}
            </FeaturePill>
        </div>
    </div>
</section>

<style>
    .grid-wrap {
        perspective: 1000px;
        overflow: hidden;
    }
    .grid-bg {
        position: absolute;
        inset: -50% -25% 0;
        background-image:
            linear-gradient(rgba(224, 182, 104, 0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(224, 182, 104, 0.09) 1px, transparent 1px);
        background-size: 54px 54px;
        transform: rotateX(58deg);
        transform-origin: 50% 0%;
        mask-image: radial-gradient(ellipse 65% 75% at 50% 18%, #000 5%, transparent 70%);
        -webkit-mask-image: radial-gradient(ellipse 65% 75% at 50% 18%, #000 5%, transparent 70%);
    }

    .gradient-gold {
        background: linear-gradient(180deg, #ffe6ad 0%, #f2b65a 55%, #d99f3c 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    /* gradient border ring on the input */
    .input-card {
        background: linear-gradient(
            145deg,
            rgba(247, 217, 143, 0.45),
            rgba(214, 170, 92, 0.12) 45%,
            rgba(214, 170, 92, 0.28)
        );
        box-shadow: 0 30px 70px -34px rgba(0, 0, 0, 0.95);
        transition: box-shadow 0.3s ease;
    }
    .input-card:focus-within {
        box-shadow:
            0 30px 70px -30px rgba(0, 0, 0, 0.95),
            0 0 0 1px rgba(247, 217, 143, 0.25),
            0 0 40px -10px rgba(217, 159, 60, 0.35);
    }

    .gold-btn {
        background: linear-gradient(180deg, #f9dd97 0%, #e2a948 55%, #d99f3c 100%);
        box-shadow:
            0 14px 30px -12px rgba(217, 159, 60, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            filter 0.2s ease;
    }
    .gold-btn:hover {
        transform: translateY(-1px);
        filter: brightness(1.05);
        box-shadow:
            0 20px 38px -12px rgba(217, 159, 60, 0.7),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }
</style>
