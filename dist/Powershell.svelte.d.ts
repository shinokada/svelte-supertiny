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
export type PowershellProps = typeof __propDef.props;
export type PowershellEvents = typeof __propDef.events;
export type PowershellSlots = typeof __propDef.slots;
export default class Powershell extends SvelteComponent<
	PowershellProps,
	PowershellEvents,
	PowershellSlots
> {}
export {};
