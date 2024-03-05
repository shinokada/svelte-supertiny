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
export type LinuxProps = typeof __propDef.props;
export type LinuxEvents = typeof __propDef.events;
export type LinuxSlots = typeof __propDef.slots;
export default class Linux extends SvelteComponent<LinuxProps, LinuxEvents, LinuxSlots> {}
export {};
