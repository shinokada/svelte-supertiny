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
export type VisualstudiocodeProps = typeof __propDef.props;
export type VisualstudiocodeEvents = typeof __propDef.events;
export type VisualstudiocodeSlots = typeof __propDef.slots;
export default class Visualstudiocode extends SvelteComponent<
	VisualstudiocodeProps,
	VisualstudiocodeEvents,
	VisualstudiocodeSlots
> {}
export {};
