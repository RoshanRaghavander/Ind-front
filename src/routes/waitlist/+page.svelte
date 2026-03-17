<script lang="ts">
    import { Button } from '$lib/components/ui';
    import { Input } from '$lib/components/ui';
    import Head from '$lib/components/meta/head.svelte';
    import { Main } from '$lib/layouts';
    import { MainFooter } from '$lib/components';
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';

    let { form }: { form: ActionData } = $props();

    let name = $state('');
    let email = $state('');
    let company = $state('');
    let isSubmitting = $state(false);

    $effect(() => {
        if (form?.success) {
            isSubmitting = false;
        }
    });
</script>

<Head title="Waitlist - Indobase" />

<Main>
    <div class="container flex max-w-lg flex-col items-center justify-center py-20 text-center min-h-[70vh]">
        <h1 class="text-headline text-primary font-aeonik-pro text-pretty mb-4">
            Join the Waitlist<span class="text-accent">_</span>
        </h1>
        <p class="text-description text-secondary mb-10 w-full max-w-sm">
            Sign up to get early access and start building with Indobase.
        </p>

        {#if form?.success}
            <div class="bg-accent-200/10 text-accent-200 border-accent-200/20 w-full rounded-2xl border p-6 text-center">
                <h3 class="font-aeonik-pro text-title mb-2">{form?.message || "You're on the list!"}</h3>
                <p class="text-secondary text-sm">We'll let you know as soon as an opening is available.</p>
            </div>
            <Button
                href="/"
                class="mt-8"
                variant="secondary"
            >
                Back to Home
            </Button>
        {:else}
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
                    <p class="text-red-500 text-sm font-medium">{form.error}</p>
                {/if}
                <div class="flex flex-col gap-1 text-left">
                    <label for="name" class="text-primary text-sm font-medium">Name</label>
                    <Input id="name" name="name" placeholder="John Doe" bind:value={name} required autocomplete="name" />
                </div>
                <div class="flex flex-col gap-1 text-left">
                    <label for="email" class="text-primary text-sm font-medium">Email</label>
                    <Input type="email" id="email" name="email" placeholder="john@example.com" bind:value={email} required autocomplete="email" />
                </div>
                <div class="flex flex-col gap-1 text-left">
                    <label for="company" class="text-primary text-sm font-medium">Company (Optional)</label>
                    <Input id="company" name="company" placeholder="Acme Inc." bind:value={company} autocomplete="organization" />
                </div>
                
                <Button type="submit" class="mt-4 w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </Button>
            </form>
        {/if}
    </div>
</Main>

<div class="container">
    <MainFooter />
</div>
