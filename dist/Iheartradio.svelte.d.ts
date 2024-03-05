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
export type IheartradioProps = typeof __propDef.props;
export type IheartradioEvents = typeof __propDef.events;
export type IheartradioSlots = typeof __propDef.slots;
export default class Iheartradio extends SvelteComponent<
	IheartradioProps,
	IheartradioEvents,
	IheartradioSlots
> {}
export {};
