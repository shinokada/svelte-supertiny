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
export type YarnProps = typeof __propDef.props;
export type YarnEvents = typeof __propDef.events;
export type YarnSlots = typeof __propDef.slots;
export default class Yarn extends SvelteComponent<YarnProps, YarnEvents, YarnSlots> {}
export {};
