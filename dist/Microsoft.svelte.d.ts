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
export type MicrosoftProps = typeof __propDef.props;
export type MicrosoftEvents = typeof __propDef.events;
export type MicrosoftSlots = typeof __propDef.slots;
export default class Microsoft extends SvelteComponent<
	MicrosoftProps,
	MicrosoftEvents,
	MicrosoftSlots
> {}
export {};
