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
export type SamsungSwoopProps = typeof __propDef.props;
export type SamsungSwoopEvents = typeof __propDef.events;
export type SamsungSwoopSlots = typeof __propDef.slots;
export default class SamsungSwoop extends SvelteComponent<
	SamsungSwoopProps,
	SamsungSwoopEvents,
	SamsungSwoopSlots
> {}
export {};
