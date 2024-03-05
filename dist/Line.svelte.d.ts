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
export type LineProps = typeof __propDef.props;
export type LineEvents = typeof __propDef.events;
export type LineSlots = typeof __propDef.slots;
export default class Line extends SvelteComponent<LineProps, LineEvents, LineSlots> {}
export {};
