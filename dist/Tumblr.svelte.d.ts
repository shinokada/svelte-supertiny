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
export type TumblrProps = typeof __propDef.props;
export type TumblrEvents = typeof __propDef.events;
export type TumblrSlots = typeof __propDef.slots;
export default class Tumblr extends SvelteComponent<TumblrProps, TumblrEvents, TumblrSlots> {}
export {};
