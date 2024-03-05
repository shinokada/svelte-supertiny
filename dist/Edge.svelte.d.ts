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
export type EdgeProps = typeof __propDef.props;
export type EdgeEvents = typeof __propDef.events;
export type EdgeSlots = typeof __propDef.slots;
export default class Edge extends SvelteComponent<EdgeProps, EdgeEvents, EdgeSlots> {}
export {};
