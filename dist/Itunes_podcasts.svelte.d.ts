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
export type ItunesPodcastsProps = typeof __propDef.props;
export type ItunesPodcastsEvents = typeof __propDef.events;
export type ItunesPodcastsSlots = typeof __propDef.slots;
export default class ItunesPodcasts extends SvelteComponent<
	ItunesPodcastsProps,
	ItunesPodcastsEvents,
	ItunesPodcastsSlots
> {}
export {};
