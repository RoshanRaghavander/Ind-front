<script lang="ts">
    const items = [
        {
            title: 'INR Billing & Local Pricing',
            body: 'Transparent pricing in Indian Rupees with billing built for how local teams and businesses actually pay.'
        },
        {
            title: 'DPDPA Compliant & Secure Data Residency',
            body: 'Your data stays in India, fully compliant with the DPDPA and backed by secure, in-country residency.'
        }
    ];
</script>

<section class="relative mx-auto max-w-5xl px-6 py-20 md:py-24">
    <div class="flex flex-col items-center text-center">
        <span class="eyebrow">Made for India</span>
        <h2 class="section-title mt-4">The Full-Stack for Bharat</h2>
        <p class="mt-4 max-w-lg text-sm text-greyscale-400 md:text-base">
            Infrastructure that understands local compliance, currency and the way Indian teams
            build.
        </p>
    </div>

    <div class="mt-12 grid gap-6 md:grid-cols-2">
        {#each items as item, i}
            <div class="bharat-card group relative overflow-hidden rounded-[22px] p-7">
                <span class="card-glow pointer-events-none absolute inset-0"></span>
                <span class="icon-badge relative flex size-12 items-center justify-center rounded-[14px] text-[#3a2706]">
                    {#if i === 0}
                        <span class="text-xl font-bold">₹</span>
                    {:else}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 3 4 6v6c0 4.5 3.4 7.7 8 9 4.6-1.3 8-4.5 8-9V6l-8-3Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linejoin="round"
                            />
                            <path
                                d="m9 12 2 2 4-4"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    {/if}
                </span>
                <h3 class="relative mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p class="relative mt-2 text-sm leading-relaxed text-greyscale-400">{item.body}</p>
            </div>
        {/each}
    </div>
</section>

<style>
    .eyebrow {
        display: inline-block;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #e0b66a;
    }

    .section-title {
        font-family: var(--font-aeonik-pro, sans-serif);
        font-weight: 700;
        letter-spacing: -0.02em;
        font-size: clamp(1.6rem, 1.1rem + 1.8vw, 2.3rem);
        line-height: 1.1;
        background: linear-gradient(180deg, #fff 0%, #f3d8a6 130%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    .bharat-card {
        background: linear-gradient(160deg, rgba(34, 29, 18, 0.65) 0%, rgba(18, 16, 12, 0.6) 100%);
        border: 1px solid rgba(214, 170, 92, 0.18);
        box-shadow: 0 30px 60px -40px rgba(0, 0, 0, 0.9);
        transition:
            transform 0.4s ease,
            border-color 0.4s ease;
    }
    .bharat-card:hover {
        transform: translateY(-4px);
        border-color: rgba(247, 217, 143, 0.4);
    }
    .card-glow {
        background: radial-gradient(
            420px circle at 15% 0%,
            rgba(217, 159, 60, 0.12),
            transparent 60%
        );
        opacity: 0;
        transition: opacity 0.4s ease;
    }
    .bharat-card:hover .card-glow {
        opacity: 1;
    }

    .icon-badge {
        background: linear-gradient(145deg, #fbe6ad 0%, #e0a94c 48%, #b9802c 100%);
        box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.6),
            inset 0 -2px 4px rgba(120, 80, 20, 0.5),
            0 6px 14px -4px rgba(180, 120, 40, 0.55);
    }
</style>
