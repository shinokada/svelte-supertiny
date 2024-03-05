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
export type GoogleMeetProps = typeof __propDef.props;
export type GoogleMeetEvents = typeof __propDef.events;
export type GoogleMeetSlots = typeof __propDef.slots;
export default class GoogleMeet extends SvelteComponent<
	GoogleMeetProps,
	GoogleMeetEvents,
	GoogleMeetSlots
> {}
export {};
