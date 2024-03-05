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
export type MeetupProps = typeof __propDef.props;
export type MeetupEvents = typeof __propDef.events;
export type MeetupSlots = typeof __propDef.slots;
export default class Meetup extends SvelteComponent<MeetupProps, MeetupEvents, MeetupSlots> {}
export {};
