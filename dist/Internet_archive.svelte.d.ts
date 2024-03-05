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
export type InternetArchiveProps = typeof __propDef.props;
export type InternetArchiveEvents = typeof __propDef.events;
export type InternetArchiveSlots = typeof __propDef.slots;
export default class InternetArchive extends SvelteComponent<
	InternetArchiveProps,
	InternetArchiveEvents,
	InternetArchiveSlots
> {}
export {};
