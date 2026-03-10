<script lang="ts">
    import { Button } from '$lib/components/ui';
    import { Input } from '$lib/components/ui';
    import Head from '$lib/components/meta/head.svelte';
    import { Main } from '$lib/layouts';
    import { MainFooter } from '$lib/components';
    import { enhance } from '$app/forms';
    import type { PageData, ActionData } from './$types';

    let { data, form }: { data: PageData; form: ActionData } = $props();

    let editingEntry: { id: string; name: string; email: string; company: string } | null = $state(null);

    function startEdit(entry: any) {
        editingEntry = {
            id: entry.id,
            name: entry.name,
            email: entry.email,
            company: entry.company || ''
        };
    }

    function cancelEdit() {
        editingEntry = null;
    }
</script>

<Head title="Waitlist Dashboard - Indobase" />

<Main>
    <div class="container py-20 min-h-[70vh]">
        <h1 class="text-headline text-primary font-aeonik-pro mb-8">
            Waitlist Dashboard<span class="text-accent">_</span>
        </h1>

        {#if data.error}
            <div class="bg-red-500/10 text-red-500 border-red-500/20 mb-8 w-full rounded-2xl border p-4">
                <p class="font-medium">{data.error}</p>
            </div>
        {/if}

        {#if form?.error}
            <div class="bg-red-500/10 text-red-500 border-red-500/20 mb-8 w-full rounded-2xl border p-4">
                <p class="font-medium">{form.error}</p>
            </div>
        {/if}

        <div class="border-smooth divide-smooth divide-y divide-dashed rounded-3xl border bg-white/2 backdrop-blur-lg overflow-hidden">
            <div class="grid grid-cols-12 gap-4 p-4 font-medium text-primary text-sm bg-black/5">
                <div class="col-span-3">Name</div>
                <div class="col-span-3">Email</div>
                <div class="col-span-2">Company</div>
                <div class="col-span-2">Joined</div>
                <div class="col-span-2 text-right">Actions</div>
            </div>

            {#each data.waitlist as entry}
                {#if editingEntry?.id === entry.id}
                    <form 
                        class="grid grid-cols-12 gap-4 p-4 items-center bg-accent-200/5"
                        method="POST"
                        action="?/edit"
                        use:enhance={() => {
                            return async ({ update }) => {
                                await update();
                                editingEntry = null;
                            };
                        }}
                    >
                        <input type="hidden" name="id" value={editingEntry.id} />
                        <div class="col-span-3">
                            <Input name="name" bind:value={editingEntry.name} class="h-8 text-sm" required />
                        </div>
                        <div class="col-span-3">
                            <Input name="email" type="email" bind:value={editingEntry.email} class="h-8 text-sm" required />
                        </div>
                        <div class="col-span-2">
                            <Input name="company" bind:value={editingEntry.company} class="h-8 text-sm" />
                        </div>
                        <div class="col-span-2 text-secondary text-sm">
                            {new Date(entry.createdAt).toLocaleDateString()}
                        </div>
                        <div class="col-span-2 flex justify-end gap-2">
                            <Button variant="secondary" type="button" class="h-8 px-3 text-xs" onclick={cancelEdit}>Cancel</Button>
                            <Button type="submit" class="h-8 px-3 text-xs">Save</Button>
                        </div>
                    </form>
                {:else}
                    <div class="grid grid-cols-12 gap-4 p-4 items-center text-secondary text-sm hover:bg-black/2 transition-colors">
                        <div class="col-span-3 font-medium text-primary break-all">{entry.name}</div>
                        <div class="col-span-3 break-all">{entry.email}</div>
                        <div class="col-span-2 break-words">{entry.company || '-'}</div>
                        <div class="col-span-2">
                            {new Date(entry.createdAt).toLocaleDateString()}
                        </div>
                        <div class="col-span-2 flex justify-end gap-2">
                            <Button variant="secondary" class="h-8 px-3 text-xs" onclick={() => startEdit(entry)}>Edit</Button>
                            <form 
                                method="POST" 
                                action="?/delete"
                                use:enhance
                            >
                                <input type="hidden" name="id" value={entry.id} />
                                <Button variant="secondary" class="h-8 px-3 text-xs !text-red-500 hover:!bg-red-50 hover:!border-red-200">Delete</Button>
                            </form>
                        </div>
                    </div>
                {/if}
            {:else}
                <div class="p-8 text-center text-secondary">
                    No waitlist entries found.
                </div>
            {/each}
        </div>
    </div>
</Main>

<div class="container">
    <MainFooter />
</div>
