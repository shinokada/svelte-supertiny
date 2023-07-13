# Svelte Supertiny

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsors" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-supertiny" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-supertiny" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-supertiny" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-supertiny" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-supertiny.svg" alt="npm" height="25" style="height: 25px !important;"></a>
</div>

340+ SVG logos for popular brands from <a href="https://github.com/edent/SuperTinyIcons">SuperTinyIcons</a> for Svelte.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub repo](https://github.com/shinokada/svelte-supertiny/)

## Original source

[edent/SuperTinyIcons](https://github.com/edent/SuperTinyIcons)

## License

[Svelte-Supertiny License](https://github.com/shinokada/svelte-supertiny/LICENSE)

[SuperTinyIcons License](https://github.com/edent/SuperTinyIcons/blob/master/LICENSE)


## Installation

```sh
pnpm i -D svelte-supertiny
```

## Usage

In a svelte file:

```html
<script>
  import { Amazon } from 'svelte-supertiny';
</script>

<Amazon />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import Amazon from 'svelte-supertiny/Amazon.svelte';
</script>

<Amazon />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

```sh
pnpm i -D typescript@latest
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```

## Props

- size = '24';
- role = 'img';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `size` prop to change the size of icons.

```html
<script>
  import { Amazon } from 'svelte-supertiny';
</script>

<Amazon size="30" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<script>
  import { Amazon } from 'svelte-supertiny';
</script>

<Amazon class="shrink-0 h-40 w-40" />
```

## CSS frameworks suport

Use the `class` prop to change colors and add additional css.

Tailwind example:

```html
<script>
  import { Amazon } from 'svelte-supertiny';
</script>

<Amazon class="m-8" />
```

Bootstrap example:

```html
<script>
  import { Amazon } from 'svelte-supertiny';
</script>

<Amazon class="px-4" />
```

## aria-label

All icons have aria-label. For example Amazon has aria-label="amazon". Use ariaLabel prop to modify the aria-label value.

```html
<Amazon ariaLabel="amazon prime" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Amazon tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

## Passing down other attributes

You can pass other attibutes as well.

```html
<Amazon tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { Amazon } from 'svelte-supertiny';
</script>

<svelte:component this="{Amazon}" />
```

## Using onMount

```html
<script>
  import { Cib500px } from 'svelte-coreui-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Cib500px({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'svelte-supertiny`.

```html
<script>
  import * as Icon from 'svelte-supertiny';
</script>

<h1>Size</h1>
<Icon.Amazon size="30" />
<Icon.Amazon size="40" />
<Icon.Amazon size="50" />

<h1>Tailwind CSS</h1>
<Icon.Amazon class="m-4" />
<Icon.Amazon class="m-8" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
