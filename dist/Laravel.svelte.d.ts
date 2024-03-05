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
export type LaravelProps = typeof __propDef.props;
export type LaravelEvents = typeof __propDef.events;
export type LaravelSlots = typeof __propDef.slots;
export default class Laravel extends SvelteComponent<LaravelProps, LaravelEvents, LaravelSlots> {}
export {};
