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
export type KeskonfaiProps = typeof __propDef.props;
export type KeskonfaiEvents = typeof __propDef.events;
export type KeskonfaiSlots = typeof __propDef.slots;
export default class Keskonfai extends SvelteComponent<
	KeskonfaiProps,
	KeskonfaiEvents,
	KeskonfaiSlots
> {}
export {};
