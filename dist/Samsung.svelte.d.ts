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
export type SamsungProps = typeof __propDef.props;
export type SamsungEvents = typeof __propDef.events;
export type SamsungSlots = typeof __propDef.slots;
export default class Samsung extends SvelteComponent<SamsungProps, SamsungEvents, SamsungSlots> {}
export {};
