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
export type OkProps = typeof __propDef.props;
export type OkEvents = typeof __propDef.events;
export type OkSlots = typeof __propDef.slots;
export default class Ok extends SvelteComponent<OkProps, OkEvents, OkSlots> {}
export {};
