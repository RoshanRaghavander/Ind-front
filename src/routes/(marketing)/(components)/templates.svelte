<script lang="ts">
    import { cn } from '$lib/utils/cn';

    const templates = [
        {
            label: 'Business and SaaS',
            examples: 'CRM Dashboard, Project Manager, Invoice Generator, HR Portal',
            badge: 'BS'
        },
        {
            label: 'E-commerce and Delivery',
            examples: 'Online Store, Food Delivery Tracker, Inventory Manager, Marketplace',
            badge: 'ED'
        },
        {
            label: 'Healthcare and Wellness',
            examples: 'Patient Booking, Doctor Dashboard, Pharmacy Order, Health Tracker',
            badge: 'HW'
        },
        {
            label: 'Education',
            examples: 'Online Course Platform, Quiz App, Attendance System, Student Portal',
            badge: 'EDU'
        },
        {
            label: 'Community and Events',
            examples: 'Event Ticketing, Community Forum, Job Board, Networking App',
            badge: 'CE'
        },
        {
            label: 'Finance',
            examples: 'Expense Tracker, Invoice System, Payment Reconciliation, Budget Planner',
            badge: 'FI'
        }
    ];
</script>

<section
    id="builder-showcase"
    class={cn(
        'border-smooth relative overflow-hidden border-y border-dashed bg-greyscale-900 py-20',
        'before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_120%_-50%,_hsla(248,_99%,_70%,_0.25)_0,_transparent_40%)]',
        'after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_-15%_125%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)]'
    )}
    aria-labelledby="templates-title"
>
    <div class="container relative z-10">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div class="max-w-2xl">
                <p class="text-caption text-secondary font-medium uppercase">Builder showcase and templates</p>
                <h2 id="templates-title" class="text-title text-primary font-aeonik-pro mt-4 text-balance">
                    50+ ready-to-launch templates. Yours in one click.
                </h2>
            </div>
            <p class="text-description text-secondary max-w-xl font-medium">
                Start from real Indian use cases, customize the experience visually, and launch
                with your backend already connected.
            </p>
        </div>

        <div class="mt-12 grid gap-4 lg:grid-cols-3">
            {#each templates as template}
                <article class="rounded-3xl border border-dashed border-white/12 bg-white/4 p-6 shadow-sm backdrop-blur-sm">
                    <div class="flex size-14 items-center justify-center rounded-2xl bg-black text-sm font-semibold text-white">
                        {template.badge}
                    </div>
                    <h3 class="text-description text-primary mt-5 font-medium">{template.label}</h3>
                    <p class="text-sub-body text-secondary mt-3">{template.examples}</p>
                </article>
            {/each}
        </div>

        <div class="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <a
                href="/docs/products/sites/templates"
                class="text-description text-primary hover:text-accent font-medium transition-colors"
            >
                Browse all 50+ templates ->
            </a>
            <p class="text-sub-body text-secondary font-medium">
                Can't find yours? Describe it and we'll build it for you.
            </p>
        </div>
    </div>
</section>
