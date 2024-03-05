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
export type CoderwallProps = typeof __propDef.props;
export type CoderwallEvents = typeof __propDef.events;
export type CoderwallSlots = typeof __propDef.slots;
export default class Coderwall extends SvelteComponent<
	CoderwallProps,
	CoderwallEvents,
	CoderwallSlots
> {}
export {};
