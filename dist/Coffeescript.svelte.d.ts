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
export type CoffeescriptProps = typeof __propDef.props;
export type CoffeescriptEvents = typeof __propDef.events;
export type CoffeescriptSlots = typeof __propDef.slots;
export default class Coffeescript extends SvelteComponent<
	CoffeescriptProps,
	CoffeescriptEvents,
	CoffeescriptSlots
> {}
export {};
