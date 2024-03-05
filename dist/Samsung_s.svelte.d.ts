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
export type SamsungSProps = typeof __propDef.props;
export type SamsungSEvents = typeof __propDef.events;
export type SamsungSSlots = typeof __propDef.slots;
export default class SamsungS extends SvelteComponent<
	SamsungSProps,
	SamsungSEvents,
	SamsungSSlots
> {}
export {};
