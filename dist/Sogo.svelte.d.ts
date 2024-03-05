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
export type SogoProps = typeof __propDef.props;
export type SogoEvents = typeof __propDef.events;
export type SogoSlots = typeof __propDef.slots;
export default class Sogo extends SvelteComponent<SogoProps, SogoEvents, SogoSlots> {}
export {};
