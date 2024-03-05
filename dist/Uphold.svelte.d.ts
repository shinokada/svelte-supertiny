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
export type UpholdProps = typeof __propDef.props;
export type UpholdEvents = typeof __propDef.events;
export type UpholdSlots = typeof __propDef.slots;
export default class Uphold extends SvelteComponent<UpholdProps, UpholdEvents, UpholdSlots> {}
export {};
