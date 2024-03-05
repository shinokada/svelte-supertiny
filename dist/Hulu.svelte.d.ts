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
export type HuluProps = typeof __propDef.props;
export type HuluEvents = typeof __propDef.events;
export type HuluSlots = typeof __propDef.slots;
export default class Hulu extends SvelteComponent<HuluProps, HuluEvents, HuluSlots> {}
export {};
