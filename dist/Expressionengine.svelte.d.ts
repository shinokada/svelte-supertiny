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
export type ExpressionengineProps = typeof __propDef.props;
export type ExpressionengineEvents = typeof __propDef.events;
export type ExpressionengineSlots = typeof __propDef.slots;
export default class Expressionengine extends SvelteComponent<
	ExpressionengineProps,
	ExpressionengineEvents,
	ExpressionengineSlots
> {}
export {};
