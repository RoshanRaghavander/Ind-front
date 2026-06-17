<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = {
        title: string;
        /** position helper classes for absolute placement on desktop */
        class?: string;
        /** seconds of animation delay so cards float out of sync */
        delay?: number;
        icon: Snippet;
    };

    const { title, class: classes = '', delay = 0, icon }: Props = $props();
</script>

<div
    class="gold-card group relative flex w-[168px] flex-col items-start gap-3.5 rounded-[20px] px-5 py-5 select-none {classes}"
    style="--delay: {delay}s;"
>
    <span class="sheen pointer-events-none absolute inset-0 rounded-[20px]"></span>
    <span
        class="icon-badge relative flex size-12 items-center justify-center rounded-[14px] text-[#3a2706]"
    >
        {@render icon()}
    </span>
    <span class="relative text-sm leading-tight font-semibold text-[#f6e2bb]">{title}</span>
</div>

<style>
    .gold-card {
        background:
            linear-gradient(155deg, rgba(96, 70, 26, 0.55) 0%, rgba(30, 23, 11, 0.72) 100%);
        border: 1px solid rgba(224, 182, 104, 0.3);
        box-shadow:
            0 26px 50px -22px rgba(0, 0, 0, 0.85),
            0 2px 8px -2px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(250, 224, 168, 0.18),
            inset 0 0 28px rgba(214, 170, 92, 0.05);
        backdrop-filter: blur(8px);
        transform-style: preserve-3d;
        animation: float 6s ease-in-out infinite;
        animation-delay: var(--delay);
        transition:
            transform 0.45s var(--easing-spring, ease),
            border-color 0.45s ease,
            box-shadow 0.45s ease;
    }

    .gold-card:hover {
        transform: translateY(-6px) scale(1.03);
        border-color: rgba(247, 217, 143, 0.55);
        box-shadow:
            0 34px 60px -24px rgba(0, 0, 0, 0.9),
            inset 0 1px 0 rgba(250, 224, 168, 0.28),
            0 0 40px -8px rgba(217, 159, 60, 0.35);
    }

    .icon-badge {
        background: linear-gradient(145deg, #fbe6ad 0%, #e0a94c 48%, #b9802c 100%);
        box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.6),
            inset 0 -2px 4px rgba(120, 80, 20, 0.5),
            0 6px 14px -4px rgba(180, 120, 40, 0.55);
    }

    /* glossy top-left highlight */
    .sheen {
        background: linear-gradient(
            135deg,
            rgba(255, 240, 205, 0.14) 0%,
            rgba(255, 240, 205, 0) 38%
        );
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-9px);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .gold-card {
            animation: none;
        }
    }
</style>
