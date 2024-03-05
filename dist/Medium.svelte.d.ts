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
export type MediumProps = typeof __propDef.props;
export type MediumEvents = typeof __propDef.events;
export type MediumSlots = typeof __propDef.slots;
export default class Medium extends SvelteComponent<MediumProps, MediumEvents, MediumSlots> {}
export {};
