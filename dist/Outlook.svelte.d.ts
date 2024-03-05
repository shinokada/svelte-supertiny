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
export type OutlookProps = typeof __propDef.props;
export type OutlookEvents = typeof __propDef.events;
export type OutlookSlots = typeof __propDef.slots;
export default class Outlook extends SvelteComponent<OutlookProps, OutlookEvents, OutlookSlots> {}
export {};
