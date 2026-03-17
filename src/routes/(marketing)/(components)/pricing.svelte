<script lang="ts">
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { trackEvent } from '$lib/actions/analytics';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';
    import { SHOW_SCALE_PLAN } from '$lib/constants/feature-flags';

    const plans: Array<{
        name: string;
        price: string;
        description: string;
        tag?: string;
        subtitle?: string;
        event: string;
        features: string[];
    }> = [
        {
            name: 'Start for Free',
            price: '₹0',
            subtitle: ' / month',
            description: 'Get started with:',
            event: 'home-pricing-cards-free-click',
            features: [
                'Unlimited API requests',
                '50,000 monthly active users',
                '500 MB database size',
                '5 GB egress',
                '5 GB cached egress',
                '1 GB file storage',
                'Community support'
            ]
        },
        {
            name: 'Get Started',
            price: '₹2,499',
            subtitle: ' / month',
            description: 'Everything in the Free Plan, plus:',
            event: 'home-pricing-cards-pro-click',
            features: [
                '100,000 monthly active users',
                '8 GB disk size per project',
                '250 GB egress',
                '250 GB cached egress',
                '100 GB file storage',
                'Email support',
                'Daily backups stored for 7 days',
                '7-day log retention'
            ]
        },
        {
            name: 'Get Started',
            price: '₹49,999',
            subtitle: ' / month',
            description: 'Everything in the Pro Plan, plus:',
            event: 'home-pricing-cards-scale-click',
            features: [
                'SOC2',
                'Project-scoped and read-only access',
                'HIPAA available as paid add-on',
                'SSO for Supabase Dashboard',
                'Priority email support & SLAs',
                'Daily backups stored for 14 days',
                '28-day log retention',
                'Add Log Drains'
            ]
        },
        {
            name: 'Custom',
            price: 'Custom',
            description: 'Enterprise features:',
            event: 'home-pricing-cards-enterprise-click',
            features: [
                'Designated Support manager',
                'Uptime SLAs',
                'BYO Cloud supported',
                '24x7x365 premium enterprise support',
                'Private Slack channel',
                'Custom Security Questionnaires'
            ]
        }
    ];

    type PricingProps = {
        class?: string;
    };

    const { class: className }: PricingProps = $props();

    const visiblePlans = plans;

    const gridCols = `lg:grid-cols-${visiblePlans.length}`;

    const DASHBOARD_URL = getAppwriteDashboardUrl();
</script>

<div
    class={cn(
        'relative -mt-6 -mb-12 flex min-h-[650px] max-w-screen items-center justify-center overflow-hidden pt-40 md:mb-0 md:pb-10',
        className
    )}
>
    <div class="container flex w-full flex-col items-center justify-center gap-10">
        <div
            class={cn(
                'animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full',
                'bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(254,_149,_103,_0.2)_0%,_rgba(254,_149,_103,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%)]',
                'bg-position-[0%_0%]'
            )}
        ></div>

        <div
            class="animate-fade-in relative flex w-full flex-col justify-between gap-8 [animation-delay:150ms] [animation-duration:1000ms] md:flex-row md:items-center"
        >
            <h2 class="text-title text-primary font-aeonik-pro max-w-xl text-pretty">
                Start building like a team of hundreds today<span class="text-accent">_</span>
            </h2>

            <div class="mt-4 flex flex-col gap-2 lg:flex-row">
                <Button
                    href={DASHBOARD_URL}
                    class="w-full! lg:w-fit!"
                    onclick={() => {
                        trackEvent(`pricing-get-started-click`);
                    }}>Start building for free</Button
                >
                <Button
                    onclick={() => {
                        trackEvent(`pricing-view-plans-click`);
                    }}
                    href="/pricing"
                    class="w-full! lg:w-fit!"
                    variant="secondary">View pricing plans</Button
                >
            </div>
        </div>

        <div
            class="border-smooth divide-smooth grid min-h-75 w-full grid-cols-1 divide-y divide-dashed rounded-3xl border bg-white/2 backdrop-blur-lg md:grid-cols-2 md:gap-y-12 md:divide-y-0 md:px-4 md:py-8 {gridCols} lg:divide-x"
        >
            {#each visiblePlans as { name, price, tag: label, subtitle, description, event, features }, index (`${name},${label},${index}`)}
                {@const isEnterprise = name === 'Custom'}
                <div class="flex h-full w-full grow flex-col gap-1 px-5 py-5 md:py-0">
                    <div class="flex items-center gap-2.5">
                        <span class="text-description text-secondary font-medium">{name}</span>
                        {#if label}
                            <span
                                class="bg-accent-200 text-caption rounded-lg px-1.5 py-0.5 font-medium text-white"
                                >{label}</span
                            >
                        {/if}
                    </div>
                    <div class="flex flex-1 flex-col">
                        <span class="text-title font-aeonik-pro text-primary"
                            >{price}

                            {#if subtitle}
                                <span class="text-caption text-secondary -ml-1 font-sans"
                                    >{subtitle}</span
                                >
                            {/if}
                        </span>

                        <p class="text-caption text-secondary mt-4 mb-2 block font-medium">
                            {description}
                        </p>
                        <ul class="flex flex-col gap-2 mt-4">
                            {#each features as feature}
                                <li class="text-caption text-secondary flex items-start gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent mt-0.5 flex-shrink-0"><path d="M20 6 9 17l-5-5"/></svg>
                                    <span>{feature}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>

                    <Button
                        class="mt-8 mb-0 w-full!"
                        variant={name === 'Custom' ? 'secondary' : 'primary'}
                        href={isEnterprise ? '/contact-us/enterprise' : DASHBOARD_URL}
                        onclick={() => {
                            trackEvent(event);
                        }}>{isEnterprise ? 'Contact Us' : 'Get Started'}</Button
                    >
                </div>
            {/each}
        </div>
    </div>
</div>
