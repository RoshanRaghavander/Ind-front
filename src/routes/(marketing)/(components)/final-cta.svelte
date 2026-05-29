<script lang="ts">
    import { Button } from '$lib/components/ui';
    import { getIndobaseDashboardUrl } from '$lib/utils/dashboard';

    const DASHBOARD_SIGN_UP_URL = getIndobaseDashboardUrl('/dashboard/sign-up');
</script>

<section class="container py-20" aria-labelledby="final-cta-title">
    <div
        class="relative overflow-hidden rounded-[2rem] border border-dashed border-white/12 bg-white/3 px-6 py-12 text-center md:px-12"
    >
        <div
            class="animate-lighting absolute top-0 left-0 -z-10 h-full w-full bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(255,_219,_88,_0.2)_0%,_rgba(255,_219,_88,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(255,_219,_88,_0.08)_0%,_rgba(255,_219,_88,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(255,_219,_88,_0.08)_0%,_rgba(255,_219,_88,_0)_70%)] blur-3xl"
        ></div>

        <p class="text-caption text-secondary font-medium uppercase">Final call to action</p>
        <h2 id="final-cta-title" class="text-display font-aeonik-pro text-primary mt-4 text-balance">
            Your next app starts here. Right now.
        </h2>
        <p class="text-description text-secondary mx-auto mt-4 max-w-3xl font-medium">
            Free to start. No credit card. No DevOps headache. No compliance gaps. Just build,
            launch, and scale on India's full-stack launch platform.
        </p>

        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={DASHBOARD_SIGN_UP_URL}>Start Building Free</Button>
            <Button href="/contact-us" variant="secondary">Book a Demo</Button>
        </div>

        <div class="mt-6 flex flex-wrap justify-center gap-2">
            <span class="text-caption rounded-full border border-dashed border-white/12 px-3 py-1.5 text-primary">
                No credit card
            </span>
            <span class="text-caption rounded-full border border-dashed border-white/12 px-3 py-1.5 text-primary">
                DPDP compliant
            </span>
            <span class="text-caption rounded-full border border-dashed border-white/12 px-3 py-1.5 text-primary">
                India-hosted
            </span>
        </div>
    </div>
</section>
