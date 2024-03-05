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
export type TaigaProps = typeof __propDef.props;
export type TaigaEvents = typeof __propDef.events;
export type TaigaSlots = typeof __propDef.slots;
export default class Taiga extends SvelteComponent<TaigaProps, TaigaEvents, TaigaSlots> {}
export {};
