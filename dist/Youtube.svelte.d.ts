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
export type YoutubeProps = typeof __propDef.props;
export type YoutubeEvents = typeof __propDef.events;
export type YoutubeSlots = typeof __propDef.slots;
export default class Youtube extends SvelteComponent<YoutubeProps, YoutubeEvents, YoutubeSlots> {}
export {};
