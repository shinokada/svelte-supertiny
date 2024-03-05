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
export type EpubProps = typeof __propDef.props;
export type EpubEvents = typeof __propDef.events;
export type EpubSlots = typeof __propDef.slots;
export default class Epub extends SvelteComponent<EpubProps, EpubEvents, EpubSlots> {}
export {};
