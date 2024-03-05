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
export type VivinoProps = typeof __propDef.props;
export type VivinoEvents = typeof __propDef.events;
export type VivinoSlots = typeof __propDef.slots;
export default class Vivino extends SvelteComponent<VivinoProps, VivinoEvents, VivinoSlots> {}
export {};
