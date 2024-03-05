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
export type SoundcloudProps = typeof __propDef.props;
export type SoundcloudEvents = typeof __propDef.events;
export type SoundcloudSlots = typeof __propDef.slots;
export default class Soundcloud extends SvelteComponent<
	SoundcloudProps,
	SoundcloudEvents,
	SoundcloudSlots
> {}
export {};
