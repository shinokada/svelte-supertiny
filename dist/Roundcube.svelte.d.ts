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
export type RoundcubeProps = typeof __propDef.props;
export type RoundcubeEvents = typeof __propDef.events;
export type RoundcubeSlots = typeof __propDef.slots;
export default class Roundcube extends SvelteComponent<
	RoundcubeProps,
	RoundcubeEvents,
	RoundcubeSlots
> {}
export {};
