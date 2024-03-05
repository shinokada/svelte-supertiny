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
export type NhsProps = typeof __propDef.props;
export type NhsEvents = typeof __propDef.events;
export type NhsSlots = typeof __propDef.slots;
export default class Nhs extends SvelteComponent<NhsProps, NhsEvents, NhsSlots> {}
export {};
