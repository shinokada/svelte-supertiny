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
export type ReactProps = typeof __propDef.props;
export type ReactEvents = typeof __propDef.events;
export type ReactSlots = typeof __propDef.slots;
export default class React extends SvelteComponent<ReactProps, ReactEvents, ReactSlots> {}
export {};
