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
export type ApereoProps = typeof __propDef.props;
export type ApereoEvents = typeof __propDef.events;
export type ApereoSlots = typeof __propDef.slots;
export default class Apereo extends SvelteComponent<ApereoProps, ApereoEvents, ApereoSlots> {}
export {};
