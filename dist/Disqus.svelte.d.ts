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
export type DisqusProps = typeof __propDef.props;
export type DisqusEvents = typeof __propDef.events;
export type DisqusSlots = typeof __propDef.slots;
export default class Disqus extends SvelteComponent<DisqusProps, DisqusEvents, DisqusSlots> {}
export {};
