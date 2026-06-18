<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import Icon from '$lib/components/ui/icon';
    import { cn } from '$lib/utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';

    const features = [
        {
            label: 'DPDP compliant',
            description:
                "India's Digital Personal Data Protection alignment is built into every deployment by default.",
            icon: '/images/icons/gradients/star.svg',
            href: '/pricing'
        },
        {
            label: 'India data residency',
            description:
                "Your users' data stays in Indian data centres instead of being replicated outside the country.",
            icon: '/images/icons/gradients/globe.svg',
            href: '/pricing'
        },
        {
            label: 'INR pricing',
            description:
                'No USD bills, exchange-rate surprises, or hidden currency conversion fees.',
            icon: '/images/icons/gradients/cloud-credit.svg',
            href: '/pricing'
        },
        {
            label: 'SOC-2',
            description: 'Enterprise-grade security controls with audited operational safeguards.',
            icon: '/images/icons/gradients/soc-2.svg',
            href: '/pricing'
        },
        {
            label: 'HIPAA ready',
            description:
                'Protect healthtech workloads with HIPAA-ready controls available for regulated teams.',
            icon: '/images/icons/gradients/hipaa.svg',
            href: '/pricing'
        },
        {
            label: 'DDoS',
            description:
                'Automatically detect and mitigate Distributed Denial-of-Service (DDoS) attacks.',
            icon: '/images/icons/gradients/shield.svg',
            href: '/pricing'
        },
        {
            label: 'Encryption',
            description: 'AES-256 at rest and TLS 1.3 in transit across your data and APIs.',
            icon: '/images/icons/gradients/lock.svg',
            href: '/pricing'
        },
        {
            label: 'Abuse protection',
            description: 'Built-in rate limiting and anomaly detection protect your APIs from abuse.',
            icon: '/images/icons/gradients/verified.svg',
            href: '/pricing'
        }
    ];

    type FeaturesProps = {
        theme?: 'light' | 'dark';
    } & HTMLAttributes<HTMLDivElement>;

    const { theme = 'light', class: classes, ...restProps }: FeaturesProps = $props();
</script>

<div
    class={cn('bg-[#EDEDF0] pt-20 pb-12 md:pt-40', theme, classes, {
        'bg-greyscale-900': theme === 'dark'
    })}
    {...restProps}
>
    <div class="container mx-auto">
        <section class="flex flex-col gap-4 lg:flex-row lg:items-baseline lg:gap-x-20">
            <h2
                class="text-title font-aeonik-pro text-primary max-w-[700px] text-3xl leading-12 text-pretty sm:text-4xl md:text-5xl"
            >
                Built for India. Certified by everyone who matters.<span class="text-accent">_</span>
            </h2>
            <p class="text-secondary text-description mt-4 max-w-full font-medium lg:max-w-xl">
                Your users are in India, your billing is in INR, and your compliance checklist is
                non-negotiable. Indobase is the launch platform that lines those up by default.
            </p>
        </section>
    </div>
    <div class="mt-20 border-y border-dashed border-black/8">
        <div class="container grid grid-cols-2 overflow-hidden lg:grid-cols-4">
            {#each features as box}
                <a
                    class="text-sub-body group relative border-dashed border-black/8 px-2.5 py-8 font-medium last-of-type:border-0 nth-of-type-[4]:border-r-0 nth-of-type-[7]:border-b-0 max-lg:even:border-r-0 md:border-r md:border-b md:p-8 lg:nth-of-type-[5]:border-b-0 lg:nth-of-type-[6]:border-b-0 lg:nth-of-type-[8]:border-b-0"
                    href={box.href}
                    onclick={() => {
                        trackEvent(`feature-${box.label.toLowerCase().replace(' ', '-')}-click`);
                    }}
                >
                    <img loading="lazy" src={box.icon} width="40" height="40" alt="" />
                    <h3 class="text-primary mt-4 flex flex-wrap items-center gap-0.5">
                        {box.label}

                        <Icon
                            name="arrow-right"
                            class="transition-all group-hover:translate-x-0.25 group-hover:opacity-100 group-focus:translate-x-0.25 group-focus:-translate-y-0.25 group-focus:opacity-100 xl:opacity-0"
                        />
                    </h3>
                    <p class="text-secondary mt-1">
                        {box.description}
                    </p>
                </a>
            {/each}
        </div>
    </div>
</div>
