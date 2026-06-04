<script lang="ts">
    import Audiences from './(components)/audiences.svelte';
    import Bento from './(components)/bento/bento.svelte';
    import CaseStudies from './(components)/case-studies.svelte';
    import Features from './(components)/features.svelte';
    import FinalCta from './(components)/final-cta.svelte';
    import Hero from './(components)/hero.svelte';
    import Pricing from './(components)/pricing.svelte';
    import ProblemSolution from './(components)/problem-solution.svelte';
    import SocialProof from './(components)/social-proof.svelte';
    import Templates from './(components)/templates.svelte';
    import { Main } from '$lib/layouts';
    import Head from '$lib/components/meta/head.svelte';
    import { MainFooter } from '$lib/components';
</script>

<Head
    title="Indobase - Managed PostgreSQL Backend for India | Supabase-Compatible APIs"
    description="Build and launch real apps in hours on India's only DPDP-compliant, INR-priced full-stack platform. No-code builder plus production backend. Data never leaves India."
/>

<Main>
    <Hero title="Your idea deserves to be live today." />
    <SocialProof />
    <ProblemSolution />
    <Templates />
    <Bento />
    <Features theme="dark" />
    <Audiences />
    <CaseStudies />
    <Pricing />
    <FinalCta />
</Main>

<div class="container">
    <MainFooter />
</div>
