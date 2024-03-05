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
export type PreactProps = typeof __propDef.props;
export type PreactEvents = typeof __propDef.events;
export type PreactSlots = typeof __propDef.slots;
export default class Preact extends SvelteComponent<PreactProps, PreactEvents, PreactSlots> {}
export {};
