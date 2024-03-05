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
export type GoProps = typeof __propDef.props;
export type GoEvents = typeof __propDef.events;
export type GoSlots = typeof __propDef.slots;
export default class Go extends SvelteComponent<GoProps, GoEvents, GoSlots> {}
export {};
