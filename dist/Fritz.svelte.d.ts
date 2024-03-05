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
export type FritzProps = typeof __propDef.props;
export type FritzEvents = typeof __propDef.events;
export type FritzSlots = typeof __propDef.slots;
export default class Fritz extends SvelteComponent<FritzProps, FritzEvents, FritzSlots> {}
export {};
