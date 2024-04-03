<h1>Custom Default Icons</h1>

You can create a custom default icon, by using `IconSolid` or `IconOutline`:

<h2>Create a custom component</h2>

Create a Svelte component named `src/lib/MyIcon.svelte`:



This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

<h2>Implementation in a Page</h2>

To use your custom default icon in a Svelte page, do the following:



Here, we import the `MyIcon` component and the `AngleLeftSolid` icon. By passing the `AngleLeftSolid` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.
