<script lang="ts">
    const stats = [
        'Postgres + Supabase-compatible APIs',
        'India data residency',
        'DPDP aligned',
        'INR pricing'
    ];

    const logos = [
        'Healthtech',
        'Fintech',
        'SaaS',
        'Edtech',
        'Agencies',
        'Marketplace',
        'B2B',
        'Consumer apps'
    ];

    const press = ['Inc42', 'YourStory', 'The Ken', 'Economic Times Tech'];
</script>

<section class="border-smooth border-y border-dashed py-6" aria-labelledby="social-proof-title">
    <div class="container space-y-5">
        <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <p id="social-proof-title" class="text-caption text-secondary font-medium uppercase">
                Trusted by founders and developers across India
            </p>
            <ul class="flex flex-wrap gap-2">
                {#each stats as stat}
                    <li class="text-caption rounded-full border border-dashed border-white/12 px-3 py-1.5 text-primary">
                        {stat}
                    </li>
                {/each}
            </ul>
        </div>

        <div class="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <div class="rounded-2xl border border-dashed border-white/12 bg-white/3 p-4">
                <p class="text-caption text-secondary mb-3 uppercase">Built across India-first use cases</p>
                <div class="flex flex-wrap gap-2">
                    {#each logos as logo}
                        <span class="text-sub-body rounded-full bg-white/5 px-3 py-2 text-primary">
                            {logo}
                        </span>
                    {/each}
                </div>
            </div>

            <div class="rounded-2xl border border-dashed border-white/12 bg-white/3 p-4">
                <p class="text-caption text-secondary mb-3 uppercase">As seen in</p>
                <div class="flex flex-wrap gap-2">
                    {#each press as outlet}
                        <span class="text-sub-body rounded-full bg-white/5 px-3 py-2 text-primary">
                            {outlet}
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
