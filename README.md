<h1 align="center">Svelte Supertinyicons</h1>

<p align="center">
<a href="https://shinokada.github.io/svelte-supertinyicons">Svelte-Supertinyicons</a>
</p>

<p align="center">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-supertinyicons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-supertinyicons" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-supertinyicons" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-supertinyicons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-supertinyicons.svg" alt="npm" height="25"></a>
</p>

[Supertinyicons](https://github.com/edent/SuperTinyIcons) for Svelte.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

<p align="center">
<img src="/static/images/svelte-supertinyicons-450.webp" width="450" />
</p>

## Installation

```sh
npm i -D svelte-supertinyicons
```

## Icon list

[Icon list](/icon-list.md)

## Icon images

[Icon images](/icon-images.md)

## Usage

In a svelte file:

```html
<script>
  import { Amazon } from 'svelte-supertinyicons';
</script>

<Amazon />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import Amazon from 'svelte-supertinyicons/Amazon.svelte';
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

## REPL

[Demo 1](https://svelte.dev/repl/89542341632d4827ab30491ef95df6eb)

## Props

- size = '24';
- role = 'img';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `size` prop to change the size of icons.

```html
<script>
  import { Amazon } from 'svelte-supertinyicons';
</script>

<Amazon size="30" />
```

## CSS frameworks suport

Use the `class` prop to change colors and add additional css.

Tailwind example:

```html
<script>
  import { Amazon } from 'svelte-supertinyicons';
</script>

<Amazon class="m-8" />
```

Bootstrap example:

```html
<Amazon class="px-4" />
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
  import { Amazon } from 'svelte-supertinyicons';
</script>

<svelte:component this="{Amazon}" />
```

## Import all

[REPL](https://svelte.dev/repl/6b2057d58c3841fc9f37b67960f02e27)

Use `import * as Icon from 'svelte-supertinyicons`.

```html
<script>
  import * as Icon from 'svelte-supertinyicons';
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
