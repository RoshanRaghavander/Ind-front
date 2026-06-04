<script lang="ts" module>
    import CaseStudyCard from './case-study-card.svelte';

    const studies = [
        {
            company: 'B2B SaaS · Bengaluru',
            headline: 'I launched my SaaS in 3 days with a working MVP on day one',
            blurb:
                'The builder gave me a usable product in hours, and the DPDP-ready backend helped my first enterprise customer say yes faster.',
            name: 'Founder',
            title: 'B2B SaaS Startup, Bengaluru',
            avatar: '/images/testimonials/phil.jpg',
            url: '#'
        },
        {
            company: 'Fintech · Mumbai',
            headline: 'We moved off USD billing and passed our compliance review cleanly',
            blurb:
                'Switching from Supabase to Indobase cut billing friction, kept data in India, and removed exceptions from our audit checklist.',
            name: 'CTO',
            title: 'Fintech Startup, Mumbai',
            avatar: '/images/testimonials/xue.webp',
            url: '#'
        },
        {
            company: 'Agency · Hyderabad',
            headline: 'One console turned managed Postgres into a new agency revenue line',
            blurb:
                'We now manage multiple client backends from one place and sell a fully managed backend service with far less operational overhead.',
            name: 'Founder',
            title: 'Dev Agency, Hyderabad',
            avatar: '/images/testimonials/ryan.png',
            url: '#'
        }
    ];

    export type CaseStudy = (typeof studies)[number];
</script>

<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import { ToggleGroup } from 'bits-ui';

    let value = $state<string>('0');

    const getValue = () => {
        return value;
    };

    const setValue = (newValue: string) => {
        if (!newValue.length) return;
        value = newValue;
    };
</script>

<section
    class={cn(
        'border-smooth relative mb-0 flex items-center justify-center overflow-hidden border-t py-20 md:pt-30 md:pb-40',
        'from-0% before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-radial-[circle_at_120%_-50%] before:from-purple-500/30 before:to-transparent before:to-40% before:blur-2xl',
        'after:from-accent/20 after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-radial-[circle_at_-15%_125%] after:from-0% after:to-transparent after:to-40% after:blur-2xl'
    )}
    aria-labelledby="testimonials-title"
>
    <div class="container mb-10 text-center">
        <p class="text-caption text-secondary font-medium uppercase">Social proof and testimonials</p>
        <h2 id="testimonials-title" class="text-title font-aeonik-pro text-primary mt-4 text-balance">
            Builders love Indobase. Here's why.
        </h2>
    </div>
    <ToggleGroup.Root
        bind:value={getValue, setValue}
        type="single"
        class="container flex h-full flex-col items-stretch gap-4 lg:flex-row"
    >
        {#each studies as study, index}
            <CaseStudyCard {study} isActive={value === index.toString()} value={index.toString()} />
        {/each}
    </ToggleGroup.Root>
</section>
