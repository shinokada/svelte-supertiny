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
export type IbmProps = typeof __propDef.props;
export type IbmEvents = typeof __propDef.events;
export type IbmSlots = typeof __propDef.slots;
export default class Ibm extends SvelteComponent<IbmProps, IbmEvents, IbmSlots> {}
export {};
