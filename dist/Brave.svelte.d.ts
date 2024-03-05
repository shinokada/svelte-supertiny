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
export type BraveProps = typeof __propDef.props;
export type BraveEvents = typeof __propDef.events;
export type BraveSlots = typeof __propDef.slots;
export default class Brave extends SvelteComponent<BraveProps, BraveEvents, BraveSlots> {}
export {};
