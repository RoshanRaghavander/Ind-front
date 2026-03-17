import { build } from 'vite';
import { rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

async function main() {
    // Ensure we don't reuse stale build output (can happen in Docker layer caches)
    await rm(new URL('../.svelte-kit', import.meta.url), { recursive: true, force: true });

    // Generate `.svelte-kit/tsconfig.json` and other artifacts before Vite build.
    // In some CI/Nixpacks environments, calling `svelte-kit` directly can fail to resolve the binary.
    // `pnpm exec` ensures we use the project-local CLI from `node_modules/.bin`.
    const pnpmCmd = process.env.npm_execpath
        ? [process.execPath, [process.env.npm_execpath, 'exec', 'svelte-kit', 'sync']]
        : ['pnpm', ['exec', 'svelte-kit', 'sync']];

    const res = spawnSync(pnpmCmd[0], pnpmCmd[1], {
        stdio: 'inherit',
        shell: false
    });
    if (res.error) {
        throw res.error;
    }
    if (res.status !== 0) {
        process.exit(res.status ?? 1);
    }

    await build();
}

main();
