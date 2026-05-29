<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = {
        children: Snippet;
    };

    const { children }: Props = $props();
</script>

<div class="dark min-h-screen bg-greyscale-900 text-primary">
    {@render children()}
</div>

<!-- <MainFooter />
<SubFooter /> -->
