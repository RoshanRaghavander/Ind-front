<script lang="ts">
    type Item = { title: string; body: string; icon: 'api' | 'type' | 'scale' | 'support' };

    const topRow: Item[] = [
        {
            title: 'Instant APIs',
            body: 'Auto-generated REST APIs the moment you create a collection.',
            icon: 'api'
        },
        {
            title: 'Type-Safe Clients',
            body: 'Strongly typed SDKs that keep your data and code in sync.',
            icon: 'type'
        },
        {
            title: '24/7 Support',
            body: 'A team in your timezone, ready whenever you ship.',
            icon: 'support'
        }
    ];

    const grid: Item[] = [
        {
            title: 'Instant APIs',
            body: 'Generate secure, documented endpoints automatically.',
            icon: 'api'
        },
        {
            title: 'Type-Safe Clients',
            body: 'Catch errors at build time with end-to-end types.',
            icon: 'type'
        },
        {
            title: 'Scalable Infrastructure',
            body: 'From first user to millions, no re-architecting needed.',
            icon: 'scale'
        },
        {
            title: '24/7 Support',
            body: 'Expert help around the clock as you grow.',
            icon: 'support'
        }
    ];
</script>

{#snippet renderIcon(name: Item['icon'])}
    {#if name === 'api'}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            ><path
                d="m9 8-4 4 4 4m6-8 4 4-4 4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            /></svg
        >
    {:else if name === 'type'}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            ><path
                d="M4 6h16M4 6v12M4 6l8 6 8-6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            /></svg
        >
    {:else if name === 'scale'}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            ><path
                d="M4 20V10m6 10V4m6 16v-7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
            /></svg
        >
    {:else}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            ><path
                d="M4 13a8 8 0 0 1 16 0v4a2 2 0 0 1-2 2h-1v-6h3M4 13v4a2 2 0 0 0 2 2h1v-6H4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            /></svg
        >
    {/if}
{/snippet}

<section class="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
    <!-- top three-up -->
    <div class="grid gap-10 text-center md:grid-cols-3">
        {#each topRow as item}
            <div class="flex flex-col items-center">
                <span class="icon-badge mb-4 flex size-12 items-center justify-center rounded-[14px] text-[#3a2706]">
                    {@render renderIcon(item.icon)}
                </span>
                <h3 class="text-base font-semibold text-white">{item.title}</h3>
                <p class="mt-2 max-w-[260px] text-sm leading-relaxed text-greyscale-400">
                    {item.body}
                </p>
            </div>
        {/each}
    </div>

    <div class="mt-20 flex flex-col items-center text-center">
        <span class="eyebrow">Everything included</span>
        <h2 class="section-title mt-4">One platform, every primitive</h2>
        <p class="mx-auto mt-4 max-w-xl text-sm text-greyscale-400 md:text-base">
            Everything you need to build, ship, and scale a full-stack app — no glue code required.
        </p>
    </div>

    <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {#each grid as item}
            <div class="feature-card group relative overflow-hidden rounded-[20px] p-6">
                <span class="card-glow pointer-events-none absolute inset-0"></span>
                <span class="icon-badge relative mb-4 flex size-11 items-center justify-center rounded-[13px] text-[#3a2706]">
                    {@render renderIcon(item.icon)}
                </span>
                <h3 class="relative text-base font-semibold text-white">{item.title}</h3>
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

    .icon-badge {
        background: linear-gradient(145deg, #fbe6ad 0%, #e0a94c 48%, #b9802c 100%);
        box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.6),
            inset 0 -2px 4px rgba(120, 80, 20, 0.5),
            0 6px 14px -4px rgba(180, 120, 40, 0.55);
    }

    .feature-card {
        background: linear-gradient(160deg, rgba(30, 26, 17, 0.6) 0%, rgba(16, 14, 11, 0.55) 100%);
        border: 1px solid rgba(214, 170, 92, 0.16);
        transition:
            transform 0.35s ease,
            border-color 0.35s ease;
    }
    .feature-card:hover {
        transform: translateY(-5px);
        border-color: rgba(247, 217, 143, 0.4);
    }
    .card-glow {
        background: radial-gradient(300px circle at 50% 0%, rgba(217, 159, 60, 0.14), transparent 65%);
        opacity: 0;
        transition: opacity 0.35s ease;
    }
    .feature-card:hover .card-glow {
        opacity: 1;
    }
</style>
