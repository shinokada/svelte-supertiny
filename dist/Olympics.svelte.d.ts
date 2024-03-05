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
export type OlympicsProps = typeof __propDef.props;
export type OlympicsEvents = typeof __propDef.events;
export type OlympicsSlots = typeof __propDef.slots;
export default class Olympics extends SvelteComponent<
	OlympicsProps,
	OlympicsEvents,
	OlympicsSlots
> {}
export {};
