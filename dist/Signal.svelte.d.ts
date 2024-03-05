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
export type SignalProps = typeof __propDef.props;
export type SignalEvents = typeof __propDef.events;
export type SignalSlots = typeof __propDef.slots;
export default class Signal extends SvelteComponent<SignalProps, SignalEvents, SignalSlots> {}
export {};
