<script lang="ts">
    const cards = [
        {
            problem: "You're paying USD for Indian user data hosted abroad",
            solution:
                'Indobase is priced in INR. Indian user data stays in Indian data centres by default.'
        },
        {
            problem: 'Your app needs auth, database, storage, messaging, and hosting from different vendors',
            solution:
                'One dashboard, one API surface, and one INR bill across builder, backend, and deployment.'
        },
        {
            problem: "Your legal team says you're not DPDP-ready, and the deadline is real",
            solution:
                'Indobase is built for DPDP compliance from day one, without extra compliance plumbing.'
        }
    ];
</script>

<section class="container py-20" aria-labelledby="problem-solution-title">
    <div class="mx-auto max-w-4xl text-center">
        <p class="text-caption text-secondary font-medium uppercase">Problem and solution</p>
        <h2
            id="problem-solution-title"
            class="text-title font-aeonik-pro text-primary mt-4 text-balance"
        >
            Building an app in India used to mean 4 vendors, 3 currencies, and 0 compliance.
        </h2>
        <p class="text-description text-secondary mx-auto mt-4 max-w-3xl font-medium">
            Most backend platforms were built for the US market. Your data lives abroad, your
            billing is in USD, and your compliance team still says no. Indobase replaces that
            stack with one India-first launch platform.
        </p>
    </div>

    <div class="mt-12 grid gap-6 lg:grid-cols-3">
        {#each cards as card}
            <article class="rounded-3xl border border-dashed border-white/12 bg-white/3 p-6">
                <p class="text-caption text-secondary uppercase">Problem</p>
                <h3 class="text-description text-primary mt-3 font-medium">{card.problem}</h3>
                <div class="my-5 h-px border-t border-dashed border-white/12"></div>
                <p class="text-caption text-secondary uppercase">How Indobase solves it</p>
                <p class="text-sub-body text-primary mt-3 font-medium">{card.solution}</p>
            </article>
        {/each}
    </div>
</section>
