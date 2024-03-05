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
export type DartProps = typeof __propDef.props;
export type DartEvents = typeof __propDef.events;
export type DartSlots = typeof __propDef.slots;
export default class Dart extends SvelteComponent<DartProps, DartEvents, DartSlots> {}
export {};
