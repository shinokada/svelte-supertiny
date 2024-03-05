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
export type IntelProps = typeof __propDef.props;
export type IntelEvents = typeof __propDef.events;
export type IntelSlots = typeof __propDef.slots;
export default class Intel extends SvelteComponent<IntelProps, IntelEvents, IntelSlots> {}
export {};
