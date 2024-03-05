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
export type MacosProps = typeof __propDef.props;
export type MacosEvents = typeof __propDef.events;
export type MacosSlots = typeof __propDef.slots;
export default class Macos extends SvelteComponent<MacosProps, MacosEvents, MacosSlots> {}
export {};
