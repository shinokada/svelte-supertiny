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
  import { Svelte } from 'svelte-supertiny';
</script>

<Svelte />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import Svelte from 'svelte-supertiny/Svelte.svelte';
</script>

<Svelte />
```

## Props

- size = ctx.size || '24';
- role = ctx.role || 'img';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `size` prop to change the size of icons.

```html
<script>
  import { Svelte } from 'svelte-supertiny';
</script>

<Svelte size="30" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<script>
  import { Svelte } from 'svelte-supertiny';
</script>

<Svelte class="shrink-0 h-40 w-40" />
```

## Setting Global Icon using setContext

You can establish global icon preferences in your Svelte application using `setContext`. This allows you to configure icon-related properties once and share them across multiple components. Here's how you can do it:

```html
<script>
  import { setContext } from 'svelte';

  // Define your global icon settings
  const iconCtx = {
    size: '100', // Icon size in pixels
    role: 'svg icon image' // Accessible role for the icon
  };
  setContext('iconCtx', iconCtx);
</script>
```

The `size` and `role` properties are optional, allowing you to fine-tune the appearance and accessibility of your icons as needed.

If you set `size`, icons can be customized with different colors. For example:

```html
<script>
  import { setContext } from 'svelte';
  import { Svelte } from 'svelte-supertiny';
  const iconCtx = {
    size: '50'
  };
  setContext('iconCtx', iconCtx);
</script>

<Svelte color="#ff4488" />
```

Remember that you can set only one or two of these properties, allowing you to tailor icon settings to your specific design and accessibility requirements.

Feel free to mix and match these properties as needed to create visually appealing and accessible icons in your Svelte application.

## Creating a Default Icon Setting

You can create a config file, `/src/lib/icon.config.json`.

The `Icon` component serves as a wrapper for svelte:component, allowing you to establish a global default setting or expand the capabilities of a component.

To create a default global icon setting, follow these steps:

### Configuration File

Start by creating a configuration file named `/src/lib/icon.config.json` with the following structure:

```json
{
  "config1": {
    "size": 40
  },
  "config2": {
    "size": 50
  }
}
```

In this JSON file, you can define different configurations (config1 and config2 in this case) for your icons, specifying attributes like size, variation, and color.

### Implementation

In your Svelte page file, make use of the configurations from the JSON file:

```html
<script lang="ts">
  type IconConfig = {
    config1: {
      size: number;
    };
    config2: {
      size: number;
    };
  };
  import config from '$lib/icon.config.json';
  import { Icon, Svelte, React } from 'svelte-supertiny';

  const iconConfig: IconConfig = config;
  const config1 = iconConfig.config1;
  const config2 = iconConfig.config2;
</script>

<Icon {...config1} icon="{Svelte}" />
<Icon {...config2} icon="{React}" />
```

We import the configurations from the JSON file and assign them to config1 and config2. We then utilize the Icon component with the spread attributes `{...config1}` and `{...config2}` to apply the respective configurations to each icon.

### Custom Default Icon

If you wish to create a custom default icon, you can follow these steps:

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: 30,
    color: '#FF5733'
  };
  import { Icon } from 'svelte-supertiny';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script>
  import MyIcon from '$lib/MyIcon.svelte';
  import { Svelte } from 'svelte-supertiny';
</script>

<MyIcon icon="{Svelte}" />
```

Here, we import the `MyIcon` component and the `Svelte` icon. By passing the `Svelte` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

## CSS frameworks suport

Use the `class` prop to change colors and add additional css.

Tailwind example:

```html
<script>
  import { Svelte } from 'svelte-supertiny';
</script>

<Svelte class="m-8" />
```

Bootstrap example:

```html
<script>
  import { Svelte } from 'svelte-supertiny';
</script>

<Svelte class="px-4" />
```

## aria-label

All icons have aria-label. For example Svelte has aria-label="amazon". Use ariaLabel prop to modify the aria-label value.

```html
<Svelte ariaLabel="amazon prime" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Svelte tabindex="-1" />
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
<Svelte tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { Svelte } from 'svelte-supertiny';
</script>

<svelte:component this="{Svelte}" />
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
<Icon.Svelte size="30" />
<Icon.Svelte size="40" />
<Icon.Svelte size="50" />

<h1>Tailwind CSS</h1>
<Icon.Svelte class="m-4" />
<Icon.Svelte class="m-8" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
