<script>
	import { Footer, FooterBrand, FooterLi, FooterUl } from 'svelte-5-ui-lib';
</script>

<Footer footerclass="max-w-7xl mx-auto bg-white shadow-none dark:bg-slate-950" footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand href="https://codewithshin.com" name="codewithshin.com" spanclass='text-primary-900 dark:text-primary-500' />
		<FooterUl
      ulclass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <FooterLi href="/guide/svelte-4/getting-started">Guide</FooterLi>
      <FooterLi href="/icons">Icons</FooterLi>
    </FooterUl>
	</div>
</Footer>