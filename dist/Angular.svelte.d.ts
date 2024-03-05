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
export type AngularProps = typeof __propDef.props;
export type AngularEvents = typeof __propDef.events;
export type AngularSlots = typeof __propDef.slots;
export default class Angular extends SvelteComponent<AngularProps, AngularEvents, AngularSlots> {}
export {};
