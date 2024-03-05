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
export type OperaProps = typeof __propDef.props;
export type OperaEvents = typeof __propDef.events;
export type OperaSlots = typeof __propDef.slots;
export default class Opera extends SvelteComponent<OperaProps, OperaEvents, OperaSlots> {}
export {};
