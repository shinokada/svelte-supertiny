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
export type ItchIoProps = typeof __propDef.props;
export type ItchIoEvents = typeof __propDef.events;
export type ItchIoSlots = typeof __propDef.slots;
export default class ItchIo extends SvelteComponent<ItchIoProps, ItchIoEvents, ItchIoSlots> {}
export {};
