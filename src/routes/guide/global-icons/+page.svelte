
# Setting Global Icon using setContext

You can create global icon preferences in your Svelte application using `setContext`. This allows you to configure icon-related properties once and share them across multiple components.

## Setting preferences

In your `+layout.svelte` or `+page.svelte`, you can define and set global icon preferences as follows:



The `size`, and `role` (for solid icons) and `size`, `role`, `strokeLinecap`, `strokeLinejoin`, `strokeWidth` (for outline icons) properties are optional, allowing you to fine-tune the appearance and accessibility of your icons as needed.

## Prop size

If you set `size`, icons can be customized with different color. For example:



## Setting more than one props

Remember that you can set one or more properties, allowing you to tailor icon settings to your specific design and accessibility requirements.

Feel free to mix and match these properties as needed to create visually appealing and accessible icons in your Svelte application.