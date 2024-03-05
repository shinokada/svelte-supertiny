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
export type AppleMusicProps = typeof __propDef.props;
export type AppleMusicEvents = typeof __propDef.events;
export type AppleMusicSlots = typeof __propDef.slots;
export default class AppleMusic extends SvelteComponent<
	AppleMusicProps,
	AppleMusicEvents,
	AppleMusicSlots
> {}
export {};
