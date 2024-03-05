import { SvelteComponent } from 'svelte';
declare const __propDef: {
	props: {
		size?: string | undefined;
		role?: string | undefined;
		ariaLabel?: string | undefined;
		class?: string | undefined;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type BloggerProps = typeof __propDef.props;
export type BloggerEvents = typeof __propDef.events;
export type BloggerSlots = typeof __propDef.slots;
export default class Blogger extends SvelteComponent<BloggerProps, BloggerEvents, BloggerSlots> {}
export {};
