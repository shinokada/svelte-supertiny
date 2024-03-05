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
export type HumblebundleProps = typeof __propDef.props;
export type HumblebundleEvents = typeof __propDef.events;
export type HumblebundleSlots = typeof __propDef.slots;
export default class Humblebundle extends SvelteComponent<
	HumblebundleProps,
	HumblebundleEvents,
	HumblebundleSlots
> {}
export {};
