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
export type FlickrProps = typeof __propDef.props;
export type FlickrEvents = typeof __propDef.events;
export type FlickrSlots = typeof __propDef.slots;
export default class Flickr extends SvelteComponent<FlickrProps, FlickrEvents, FlickrSlots> {}
export {};
