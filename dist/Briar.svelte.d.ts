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
export type BriarProps = typeof __propDef.props;
export type BriarEvents = typeof __propDef.events;
export type BriarSlots = typeof __propDef.slots;
export default class Briar extends SvelteComponent<BriarProps, BriarEvents, BriarSlots> {}
export {};
