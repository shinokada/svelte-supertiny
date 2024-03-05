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
export type StravaProps = typeof __propDef.props;
export type StravaEvents = typeof __propDef.events;
export type StravaSlots = typeof __propDef.slots;
export default class Strava extends SvelteComponent<StravaProps, StravaEvents, StravaSlots> {}
export {};
