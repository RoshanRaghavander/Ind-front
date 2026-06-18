<script lang="ts">
    type Props = {
        eyebrow?: string;
        title?: string;
        subtitle?: string;
        filename?: string;
        /** 'mobile' = code + phone preview, 'data' = schema + data-table preview */
        variant?: 'mobile' | 'data';
    };

    const {
        eyebrow = 'Developer experience',
        title = 'Live-preview split',
        subtitle = 'Render your data instantly as you build, backed by the Indobase database.',
        filename = 'index.js',
        variant = 'mobile'
    }: Props = $props();

    const users = [
        { name: 'Aarav Mehta', email: 'aarav@indobase.in', role: 'admin' },
        { name: 'Aanya Gupta', email: 'aanya@indobase.in', role: 'member' },
        { name: 'Kabir Khanna', email: 'kabir@indobase.in', role: 'member' },
        { name: 'Ishita Nair', email: 'ishita@indobase.in', role: 'admin' },
        { name: 'Vivaan Rao', email: 'vivaan@indobase.in', role: 'member' }
    ];
</script>

<section class="relative mx-auto max-w-5xl px-6 py-20 md:py-24">
    <div class="flex flex-col items-center text-center">
        <span class="eyebrow">{eyebrow}</span>
        <h2 class="section-title mt-4">{title}</h2>
        <p class="mx-auto mt-4 max-w-xl text-sm text-greyscale-400 md:text-base">{subtitle}</p>
    </div>

    <div class="window relative mt-12 overflow-hidden rounded-[22px]">
        <div class="grid items-stretch gap-0 md:grid-cols-[1.4fr_1fr]">
            <!-- code editor -->
            <div class="border-b border-[rgba(214,170,92,0.12)] md:border-r md:border-b-0">
                <div class="chrome flex items-center gap-2 px-4 py-3.5">
                    <span class="size-3 rounded-full bg-[#ff5f57]"></span>
                    <span class="size-3 rounded-full bg-[#febc2e]"></span>
                    <span class="size-3 rounded-full bg-[#28c840]"></span>
                    <span
                        class="ml-3 flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 text-xs text-greyscale-400"
                    >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                            ><path
                                d="m9 8-4 4 4 4m6-8 4 4-4 4"
                                stroke="currentColor"
                                stroke-width="2.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            /></svg
                        >
                        {filename}
                    </span>
                </div>

                {#if variant === 'data'}
                    <pre class="overflow-x-auto px-5 py-5 text-[13px] leading-6"><code
                            ><span class="ln">1</span><span class="kw">import</span> {'{'} defineCollection, t {'}'} <span class="kw">from</span> <span class="str">'indobase'</span>;
<span class="ln">2</span>
<span class="ln">3</span><span class="kw">export const</span> Users = <span class="fn">defineCollection</span>({'{'}
<span class="ln">4</span>  name: <span class="str">'users'</span>,
<span class="ln">5</span>  fields: {'{'}
<span class="ln">6</span>    name:  t.<span class="fn">string</span>(),
<span class="ln">7</span>    email: t.<span class="fn">email</span>().<span class="fn">unique</span>(),
<span class="ln">8</span>    role:  t.<span class="fn">enum</span>([<span class="str">'admin'</span>, <span class="str">'member'</span>])
<span class="ln">9</span>  {'}'}
<span class="ln">10</span>{'}'});
<span class="ln">11</span>
<span class="ln">12</span><span class="cm">// fully typed on every client</span>
<span class="ln">13</span><span class="kw">type</span> User = <span class="fn">Infer</span>&lt;<span class="kw">typeof</span> Users&gt;;</code></pre>
                {:else}
                    <pre class="overflow-x-auto px-5 py-5 text-[13px] leading-6"><code
                            ><span class="ln">1</span><span class="kw">import</span> {'{'} Users {'}'} <span class="kw">from</span> <span class="str">'indobase'</span>;
<span class="ln">2</span><span class="kw">import</span> {'{'} client {'}'} <span class="kw">from</span> <span class="str">'./client'</span>;
<span class="ln">3</span>
<span class="ln">4</span><span class="kw">const</span> database = <span class="fn">indobase</span>(client, {'{'}
<span class="ln">5</span>  project: <span class="str">'demo'</span>,
<span class="ln">6</span>  region: <span class="str">'in-mumbai'</span>
<span class="ln">7</span>{'}'});
<span class="ln">8</span>
<span class="ln">9</span><span class="kw">export default</span> <span class="kw">async</span> () =&gt; {'{'}
<span class="ln">10</span>  <span class="kw">return</span> <span class="kw">await</span> database
<span class="ln">11</span>    .<span class="fn">collection</span>(<span class="str">'users'</span>)
<span class="ln">12</span>    .<span class="fn">list</span>();
<span class="ln">13</span>{'}'};</code></pre>
                {/if}
            </div>

            <!-- preview pane -->
            {#if variant === 'data'}
                <!-- data table preview -->
                <div class="relative flex items-center justify-center p-6">
                    <span class="device-glow pointer-events-none absolute inset-0"></span>
                    <div
                        class="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b0a08]"
                    >
                        <div
                            class="grid grid-cols-[1.3fr_1fr_0.7fr] gap-2 border-b border-white/8 bg-white/5 px-4 py-2.5 text-[10px] font-semibold tracking-wide text-greyscale-400 uppercase"
                        >
                            <span>Name</span>
                            <span>Email</span>
                            <span>Role</span>
                        </div>
                        {#each users as u}
                            <div
                                class="grid grid-cols-[1.3fr_1fr_0.7fr] items-center gap-2 border-b border-white/5 px-4 py-2.5 text-[11px] last:border-0"
                            >
                                <span class="flex items-center gap-2 truncate text-white">
                                    <span
                                        class="flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#fbe6ad] to-[#b9802c] text-[9px] font-bold text-[#3a2706]"
                                        >{u.name[0]}</span
                                    >
                                    <span class="truncate">{u.name}</span>
                                </span>
                                <span class="truncate text-greyscale-500">{u.email}</span>
                                <span>
                                    <span
                                        class="rounded-full px-2 py-0.5 text-[9px] font-medium {u.role ===
                                        'admin'
                                            ? 'bg-[rgba(217,159,60,0.16)] text-[#e8bd72]'
                                            : 'bg-white/8 text-greyscale-400'}">{u.role}</span
                                    >
                                </span>
                            </div>
                        {/each}
                    </div>
                </div>
            {:else}
                <!-- phone preview -->
                <div class="relative flex items-center justify-center p-8">
                    <span class="device-glow pointer-events-none absolute inset-0"></span>
                    <div class="phone relative w-[238px] rounded-[2.2rem] p-[3px]">
                        <div class="overflow-hidden rounded-[2rem] bg-[#0b0a08]">
                            <div
                                class="relative flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-medium text-greyscale-300"
                            >
                                <span>9:41</span>
                                <span
                                    class="absolute top-2 left-1/2 h-4 w-16 -translate-x-1/2 rounded-full bg-black"
                                ></span>
                                <span class="flex items-center gap-1">
                                    <svg width="14" height="9" viewBox="0 0 18 12" fill="currentColor"
                                        ><rect x="0" y="7" width="3" height="5" rx="1" /><rect
                                            x="5"
                                            y="4"
                                            width="3"
                                            height="8"
                                            rx="1"
                                        /><rect x="10" y="1" width="3" height="11" rx="1" /></svg
                                    >
                                    <span
                                        class="inline-block h-[9px] w-4 rounded-[2px] border border-current"
                                    ></span>
                                </span>
                            </div>
                            <div class="px-4 pb-6">
                                <div class="mt-3 mb-3 flex items-center justify-between">
                                    <h4 class="text-sm font-semibold text-white">Users</h4>
                                    <span
                                        class="flex items-center gap-1 rounded-full bg-[rgba(40,200,64,0.12)] px-2 py-0.5 text-[9px] font-medium text-[#5fdc7a]"
                                    >
                                        <span class="size-1.5 animate-pulse rounded-full bg-[#5fdc7a]"
                                        ></span>
                                        Live
                                    </span>
                                </div>
                                <div
                                    class="mb-3 flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-[11px] text-greyscale-500"
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                                        ><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" /><path
                                            d="m20 20-3-3"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        /></svg
                                    >
                                    Search
                                </div>
                                <ul class="space-y-3.5">
                                    {#each users as u}
                                        <li class="flex items-center gap-2.5">
                                            <span
                                                class="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-[#fbe6ad] to-[#b9802c] text-[10px] font-bold text-[#3a2706]"
                                                >{u.name[0]}</span
                                            >
                                            <span class="min-w-0">
                                                <span
                                                    class="block truncate text-[11px] font-medium text-white"
                                                    >{u.name}</span
                                                >
                                                <span
                                                    class="block truncate text-[10px] text-greyscale-500"
                                                    >{u.email}</span
                                                >
                                            </span>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
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

    .window {
        background: linear-gradient(165deg, rgba(20, 18, 14, 0.92) 0%, rgba(12, 11, 9, 0.92) 100%);
        border: 1px solid rgba(214, 170, 92, 0.2);
        box-shadow:
            0 50px 100px -45px rgba(0, 0, 0, 0.95),
            inset 0 1px 0 rgba(245, 214, 150, 0.06);
    }
    .chrome {
        background: linear-gradient(180deg, rgba(40, 34, 22, 0.5), rgba(20, 18, 14, 0));
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .device-glow {
        background: radial-gradient(circle at 50% 45%, rgba(217, 159, 60, 0.16), transparent 60%);
    }
    .phone {
        background: linear-gradient(160deg, rgba(214, 170, 92, 0.4), rgba(120, 90, 40, 0.15));
        box-shadow:
            0 40px 70px -35px rgba(0, 0, 0, 0.9),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }

    pre {
        font-family: var(--font-fira-code, 'Fira Code', monospace);
        color: #d7d2c4;
    }
    .ln {
        display: inline-block;
        width: 1.75rem;
        color: #5a5648;
        user-select: none;
    }
    .kw {
        color: #e0a04d;
    }
    .str {
        color: #8fbf7f;
    }
    .fn {
        color: #6db3d8;
    }
    .cm {
        color: #6b6552;
        font-style: italic;
    }
</style>
