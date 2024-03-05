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
export type TypescriptProps = typeof __propDef.props;
export type TypescriptEvents = typeof __propDef.events;
export type TypescriptSlots = typeof __propDef.slots;
export default class Typescript extends SvelteComponent<
	TypescriptProps,
	TypescriptEvents,
	TypescriptSlots
> {}
export {};
