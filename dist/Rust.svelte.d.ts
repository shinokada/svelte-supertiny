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
export type RustProps = typeof __propDef.props;
export type RustEvents = typeof __propDef.events;
export type RustSlots = typeof __propDef.slots;
export default class Rust extends SvelteComponent<RustProps, RustEvents, RustSlots> {}
export {};
