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
export type RssProps = typeof __propDef.props;
export type RssEvents = typeof __propDef.events;
export type RssSlots = typeof __propDef.slots;
export default class Rss extends SvelteComponent<RssProps, RssEvents, RssSlots> {}
export {};
