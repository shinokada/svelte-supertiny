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
export type AndroidProps = typeof __propDef.props;
export type AndroidEvents = typeof __propDef.events;
export type AndroidSlots = typeof __propDef.slots;
export default class Android extends SvelteComponent<AndroidProps, AndroidEvents, AndroidSlots> {}
export {};
