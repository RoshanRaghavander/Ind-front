<script lang="ts">
    const links = [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Docs', href: '/docs' },
        { label: 'Contact', href: '/contact-us' }
    ];
</script>

<footer class="relative border-t border-[rgba(214,170,92,0.14)]">
    <div
        class="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center"
    >
        <nav class="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {#each links as link}
                <a
                    href={link.href}
                    class="text-sm text-greyscale-300 transition-colors hover:text-accent"
                    >{link.label}</a
                >
            {/each}
        </nav>

        <a href="/" class="flex items-center gap-2">
            <img src="/images/logos/indobase.svg" alt="Indobase" height="26" width="140" />
        </a>

        <p class="text-xs text-greyscale-500">© Indobase. All rights reserved.</p>
    </div>
</footer>
