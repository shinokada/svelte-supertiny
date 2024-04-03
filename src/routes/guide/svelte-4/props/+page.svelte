<script lang="ts">
  const meta = {
    title: 'Svelte Supertiny: Svelte 4 & 5',
  }
</script>

<h1>Props: v1</h1>

## Outline



## Solid



## Size

The following table provides details about the available sizes for icons:



To change the size of an icon, use the `size` prop and specify the desired size. For example:



If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:



## Color

You can apply Tailwind CSS color directly to the icon component or its parent tag using the `class` prop.


## CSS HEX Colors

Use the color attribute to change colors with HEX color code for Filled and Outlined components.


## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.



## A11y

All icons have aria-label. For example `BxAbacus` has `aria-label="bx abacus"`.
Use `ariaLabel` prop to modify the `aria-label` value.


Use `title`, `desc`, and `ariaLabel` props to make your icons accessible.


## withEvents

As default all icons are unfocusable. However you can add `withEvents` prop to make your icons focusable.


It is possible to add `tabindex="0"`, but it is not recommended for A11y.
If you want to use it add `withEvents` prop as well.

## Events

Use `withEvents` prop to use the following events:

## Passing down other attributes

Since all icons have "...$$restProps", you can pass other attibutes as well.

