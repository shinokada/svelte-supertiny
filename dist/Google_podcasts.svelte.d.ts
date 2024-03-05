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
export type GooglePodcastsProps = typeof __propDef.props;
export type GooglePodcastsEvents = typeof __propDef.events;
export type GooglePodcastsSlots = typeof __propDef.slots;
export default class GooglePodcasts extends SvelteComponent<
	GooglePodcastsProps,
	GooglePodcastsEvents,
	GooglePodcastsSlots
> {}
export {};
