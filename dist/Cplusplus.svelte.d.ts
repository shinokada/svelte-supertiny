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
export type CplusplusProps = typeof __propDef.props;
export type CplusplusEvents = typeof __propDef.events;
export type CplusplusSlots = typeof __propDef.slots;
export default class Cplusplus extends SvelteComponent<
	CplusplusProps,
	CplusplusEvents,
	CplusplusSlots
> {}
export {};
