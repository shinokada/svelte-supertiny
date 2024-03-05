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
export type GoogleScholarProps = typeof __propDef.props;
export type GoogleScholarEvents = typeof __propDef.events;
export type GoogleScholarSlots = typeof __propDef.slots;
export default class GoogleScholar extends SvelteComponent<
	GoogleScholarProps,
	GoogleScholarEvents,
	GoogleScholarSlots
> {}
export {};
