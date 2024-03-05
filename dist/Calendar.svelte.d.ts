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
export type CalendarProps = typeof __propDef.props;
export type CalendarEvents = typeof __propDef.events;
export type CalendarSlots = typeof __propDef.slots;
export default class Calendar extends SvelteComponent<
	CalendarProps,
	CalendarEvents,
	CalendarSlots
> {}
export {};
