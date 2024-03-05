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
export type WindowsProps = typeof __propDef.props;
export type WindowsEvents = typeof __propDef.events;
export type WindowsSlots = typeof __propDef.slots;
export default class Windows extends SvelteComponent<WindowsProps, WindowsEvents, WindowsSlots> {}
export {};
