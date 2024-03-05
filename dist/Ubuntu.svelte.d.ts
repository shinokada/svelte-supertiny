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
export type UbuntuProps = typeof __propDef.props;
export type UbuntuEvents = typeof __propDef.events;
export type UbuntuSlots = typeof __propDef.slots;
export default class Ubuntu extends SvelteComponent<UbuntuProps, UbuntuEvents, UbuntuSlots> {}
export {};
