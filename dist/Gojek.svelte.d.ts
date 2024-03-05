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
export type GojekProps = typeof __propDef.props;
export type GojekEvents = typeof __propDef.events;
export type GojekSlots = typeof __propDef.slots;
export default class Gojek extends SvelteComponent<GojekProps, GojekEvents, GojekSlots> {}
export {};
