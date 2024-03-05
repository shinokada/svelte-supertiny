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
export type PrintProps = typeof __propDef.props;
export type PrintEvents = typeof __propDef.events;
export type PrintSlots = typeof __propDef.slots;
export default class Print extends SvelteComponent<PrintProps, PrintEvents, PrintSlots> {}
export {};
