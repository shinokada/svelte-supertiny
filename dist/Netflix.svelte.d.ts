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
export type NetflixProps = typeof __propDef.props;
export type NetflixEvents = typeof __propDef.events;
export type NetflixSlots = typeof __propDef.slots;
export default class Netflix extends SvelteComponent<NetflixProps, NetflixEvents, NetflixSlots> {}
export {};
