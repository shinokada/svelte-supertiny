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
export type GoogleCalendarProps = typeof __propDef.props;
export type GoogleCalendarEvents = typeof __propDef.events;
export type GoogleCalendarSlots = typeof __propDef.slots;
export default class GoogleCalendar extends SvelteComponent<
	GoogleCalendarProps,
	GoogleCalendarEvents,
	GoogleCalendarSlots
> {}
export {};
