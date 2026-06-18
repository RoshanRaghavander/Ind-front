<script lang="ts">
    import { socials } from '$lib/constants';
    import ThemeSelect from './ThemeSelect.svelte';
    import { trackEvent } from '$lib/actions/analytics';

    export let variant: 'homepage' | 'docs' = 'homepage';

    const year = new Date().getFullYear();
</script>

{#if variant === 'homepage'}
    <footer class="web-main-footer relative mt-12 space-y-10">
        <div class="grid gap-10 border-t border-dashed border-white/12 pt-10 lg:grid-cols-[1.2fr_2fr]">
            <div class="space-y-4">
                <div>
                    <p class="text-title font-aeonik-pro text-primary">
                        Indobase - India's Full-Stack Launch Platform
                    </p>
                    <p class="text-sub-body text-secondary mt-3">
                        Build real apps. Ship fast. Scale freely. All in India.
                    </p>
                </div>
                <ul class="flex flex-wrap gap-2">
                    <li class="text-caption rounded-full border border-dashed border-white/12 px-3 py-1.5 text-primary">
                        India-hosted
                    </li>
                    <li class="text-caption rounded-full border border-dashed border-white/12 px-3 py-1.5 text-primary">
                        DPDP compliant
                    </li>
                    <li class="text-caption rounded-full border border-dashed border-white/12 px-3 py-1.5 text-primary">
                        SOC-2 certified
                    </li>
                    <li class="text-caption rounded-full border border-dashed border-white/12 px-3 py-1.5 text-primary">
                        INR pricing
                    </li>
                </ul>
            </div>

            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                <div class="space-y-3">
                    <p class="text-caption text-secondary uppercase">Products</p>
                    <a class="web-link block" href="#builder-showcase">Builder</a>
                    <a class="web-link block" href="#product-platform">Backend</a>
                    <a class="web-link block" href="#product-platform">Hosting</a>
                    <a class="web-link block" href="#product-platform">Messaging</a>
                </div>
                <div class="space-y-3">
                    <p class="text-caption text-secondary uppercase">Solutions</p>
                    <a class="web-link block" href="#audiences-title">For Startups</a>
                    <a class="web-link block" href="/docs">For Developers</a>
                    <a class="web-link block" href="#audiences-title">For Agencies</a>
                    <a class="web-link block" href="/contact-us/enterprise">For Enterprise</a>
                </div>
                <div class="space-y-3">
                    <p class="text-caption text-secondary uppercase">Resources</p>
                    <a class="web-link block" href="/docs">Documentation</a>
                    <a class="web-link block" href="/docs/products/sites/templates">Templates Gallery</a>
                    <a class="web-link block" href="https://indobase.in/blog">Blog</a>
                    <a class="web-link block" href="https://status.indobase.in">Status Page</a>
                </div>
                <div class="space-y-3">
                    <p class="text-caption text-secondary uppercase">Company</p>
                    <a class="web-link block" href="/contact-us">Contact</a>
                    <a class="web-link block" href="/contact-us/enterprise">Enterprise</a>
                    <a class="web-link block" href="https://github.com/indobase">GitHub</a>
                    <a class="web-link block" href="https://linkedin.com/company/indobase">LinkedIn</a>
                </div>
                <div class="space-y-3">
                    <p class="text-caption text-secondary uppercase">Legal</p>
                    <a class="web-link block" href="/terms">Terms of Service</a>
                    <a class="web-link block" href="/privacy">Privacy Policy</a>
                    <a class="web-link block" href="/privacy">DPDP Policy</a>
                    <a class="web-link block" href="/contact-us">Security</a>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-6 border-t border-dashed border-white/12 pt-6 lg:flex-row lg:items-center lg:justify-between">
            <div class="text-sub-body text-secondary">
                Copyright © {year} Indobase. Made in India. Data hosted in India.
            </div>

            <ul class="flex flex-wrap gap-2">
                {#each socials as social}
                    <li>
                        <a
                            href={social.link}
                            class="web-icon-button"
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class={social.icon} aria-hidden="true"></span>
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </footer>
{:else if variant === 'docs'}
    <footer class="web-main-footer is-with-bg-color relative mt-8 text-sm">
        <div class="web-main-footer-grid-1">
            <ul class="web-main-footer-grid-1-column-1 flex gap-2">
                {#each socials as social}
                    <li>
                        <a
                            href={social.link}
                            class="web-icon-button"
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class={social.icon} aria-hidden="true"></span>
                        </a>
                    </li>
                {/each}
            </ul>
            <div class="web-main-footer-grid-1-column-2">
                <ThemeSelect />
            </div>
            <ul class="web-main-footer-grid-1-column-3 web-main-footer-links items-end text-right">
                <li>
                    <a
                        href="/discord"
                        target="_blank"
                        rel="noopener noreferrer"
                        onclick={() => trackEvent(`footer-support-click`)}>Support</a
                    >
                </li>
                <li>
                    <a
                        href="https://status.indobase.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        onclick={() => trackEvent(`footer-indobase_status-click`)}>Status</a
                    >
                </li>
                <li>
                    <a
                        href="/terms"
                        onclick={() => trackEvent(`footer-terms_docs-click`)}>Terms</a
                    >
                </li>
                <li>
                    <a
                        href="/privacy"
                        onclick={() => trackEvent(`footer-privacy_docs-click`)}>Privacy</a
                    >
                </li>
                <!-- <li>
					<a href="https://github.com/indobase/indobase/releases" target="_blank" rel="noopener noreferrer">Changelog</a>
				</li> -->
            </ul>
            <div class="web-main-footer-grid-1-column-4 web-main-footer-copyright">
                Copyright © {year} Indobase
            </div>
        </div>
    </footer>
{/if}

<style lang="scss">
    @use '$scss/abstract/variables/devices';
    .web-icon-button {
        display: grid;
    }

    @media #{devices.$break1} {
        .status {
            height: 55px;
            margin-bottom: 6px; /* balancing due to style:margin-top="-4px" & the `iframe` has some spacings too I think */
        }
    }
</style>
