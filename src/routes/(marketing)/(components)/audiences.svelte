<script lang="ts">
    const audiences = [
        {
            title: 'Solo founders and indie hackers',
            copy:
                'Build and launch your product in a weekend with no credit card, no DevOps, and a free plan to start.'
        },
        {
            title: 'Early-stage startups',
            copy:
                'Ship faster with SDKs, built-in hosting, and one platform for builder workflows plus production backend services.'
        },
        {
            title: 'Growth-stage companies',
            copy:
                "Move beyond Firebase-style sprawl with backups, higher egress, and a compliance posture your auditors will actually accept."
        },
        {
            title: 'Enterprise teams',
            copy:
                'Support DPDP, SOC-2, HIPAA-ready workloads, SSO, BYO Cloud, and India-hosted deployments from day one.'
        },
        {
            title: 'Dev agencies',
            copy:
                'Run all client backends from one console and turn managed backend infrastructure into a repeatable service offering.'
        }
    ];
</script>

<section class="bg-greyscale-900 py-20" aria-labelledby="audiences-title">
    <div class="container">
        <div class="mx-auto max-w-3xl text-center">
            <p class="text-caption text-secondary font-medium uppercase">Who it's for</p>
            <h2 id="audiences-title" class="text-title font-aeonik-pro text-primary mt-4 text-balance">
                For every builder. At every stage.
            </h2>
        </div>

        <div class="mt-12 grid gap-4 lg:grid-cols-5">
            {#each audiences as audience}
                <article class="rounded-3xl border border-dashed border-white/12 bg-white/4 p-6 backdrop-blur-sm">
                    <h3 class="text-description text-primary font-medium">{audience.title}</h3>
                    <p class="text-sub-body text-secondary mt-3">{audience.copy}</p>
                </article>
            {/each}
        </div>
    </div>
</section>
