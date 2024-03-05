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
export type BufferProps = typeof __propDef.props;
export type BufferEvents = typeof __propDef.events;
export type BufferSlots = typeof __propDef.slots;
export default class Buffer extends SvelteComponent<BufferProps, BufferEvents, BufferSlots> {}
export {};
