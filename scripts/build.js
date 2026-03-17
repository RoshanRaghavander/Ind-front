import { build } from 'vite';
import { rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

async function main() {
    // Ensure we don't reuse stale build output (can happen in Docker layer caches)
    await rm(new URL('../.svelte-kit', import.meta.url), { recursive: true, force: true });

    // Generate `.svelte-kit/tsconfig.json` and other artifacts before Vite build.
    const res = spawnSync('svelte-kit', ['sync'], { stdio: 'inherit', shell: false });
    if (res.status !== 0) {
        process.exit(res.status ?? 1);
    }

    await build();
}

main();
