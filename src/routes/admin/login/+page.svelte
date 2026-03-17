<script lang="ts">
    import { Button, Input } from '$lib/components/ui';
    import Head from '$lib/components/meta/head.svelte';
    import { Main } from '$lib/layouts';
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';

    let { form }: { form: ActionData } = $props();
    let isSubmitting = $state(false);
</script>

<Head title="Admin Login - Indobase" />

<Main>
    <div class="container flex max-w-lg flex-col items-center justify-center py-20 text-center min-h-[70vh]">
        <h1 class="text-headline text-primary font-aeonik-pro text-pretty mb-4">
            Admin Login<span class="text-accent">_</span>
        </h1>
        <p class="text-description text-secondary mb-10 w-full max-w-sm">
            Enter the admin password to view the dashboard.
        </p>

        <form 
            class="flex w-full flex-col gap-4" 
            method="POST" 
            use:enhance={() => {
                isSubmitting = true;
                return async ({ update }) => {
                    await update();
                    isSubmitting = false;
                };
            }}
        >
            {#if form?.error}
                <div class="bg-red-500/10 text-red-500 border-red-500/20 w-full rounded-2xl border p-4 mb-2">
                    <p class="font-medium text-sm">{form.error}</p>
                </div>
            {/if}
            
            <div class="flex flex-col gap-1 text-left">
                <Input type="password" name="password" placeholder="Password" required />
            </div>
            
            <Button type="submit" class="mt-4 w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
            </Button>
        </form>
    </div>
</Main>
