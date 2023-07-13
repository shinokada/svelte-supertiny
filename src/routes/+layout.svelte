<script>
  import '../app.postcss';
  import { page } from '$app/stores';
  import DarkMode from 'flowbite-svelte/DarkMode.svelte';
  import Navbar from 'flowbite-svelte/Navbar.svelte';
  import NavBrand from 'flowbite-svelte/NavBrand.svelte';
  import NavLi from 'flowbite-svelte/NavLi.svelte';
  import NavUl from 'flowbite-svelte/NavUl.svelte';
  import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
  import Footer from 'flowbite-svelte/Footer.svelte'
  import FooterBrand from 'flowbite-svelte/FooterBrand.svelte'
  import FooterLinkGroup from 'flowbite-svelte/FooterLinkGroup.svelte'
  import FooterLink from 'flowbite-svelte/FooterLink.svelte'
  import { MetaTags } from 'svelte-meta-tags';

  $: activeUrl = $page.url.pathname;
</script>

<MetaTags
  title="Svelte Supertiny"
  description="Supertiny icon set for Svelte"
  openGraph={{
    type: 'website',
    url: 'https://svelte-supertiny.vercel.app/',
    title: "Svelte Supertiny",
    description: "Supertiny icon set for Svelte",
    images: [{ url: 'https://open-graph-vercel.vercel.app/api/svelte-supertiny', width: 1200, height: 630, alt: "Svelte Supertiny" }],
    site_name: 'Svelte Supertiny'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: "Svelte Supertiny",
    description: "Supertiny icon set for Svelte",
    image:'https://open-graph-vercel.vercel.app/api/svelte-supertiny',
    imageAlt: "Svelte Supertiny"
  }} />
  
<Navbar let:hidden let:toggle class="dark:bg-slate-950" >
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-2xl font-semibold text-primary-700 dark:text-primary-500">
      Svelte Supertiny
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={activeUrl === '/'}>Home</NavLi>
    <NavLi href="/icons" active={activeUrl === '/icons'}>Icons</NavLi>
    <NavLi href="https://github.com/shinokada/svelte-supertiny">GitHub</NavLi>
    <NavLi href="https://svelte-svg-icons.vercel.app/">Icon sets</NavLi>
  </NavUl>
  <DarkMode />
</Navbar>
<div class="mx-16 mb-16">
  <slot />
</div>

<Footer footerType="logo" class="dark:bg-slate-950 mx-8">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand
    href="https://svelte-supertiny.vercel.app/"
    name="Svelte Supertiny"
    classSpan="text-primary-700 dark:text-primary-500"
  />
  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/">Home</FooterLink>
    <FooterLink href="/docs">Docs</FooterLink>
    <FooterLink href="https://github.com/shinokada/svelte-supertiny/blob/main/LICENSE">Licensing</FooterLink>
    <FooterLink href="https://github.com/shinokada/svelte-supertiny/">GitHub</FooterLink>
  </FooterLinkGroup>
  </div>
</Footer>

