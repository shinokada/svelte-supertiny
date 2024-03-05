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
export type SwiftProps = typeof __propDef.props;
export type SwiftEvents = typeof __propDef.events;
export type SwiftSlots = typeof __propDef.slots;
export default class Swift extends SvelteComponent<SwiftProps, SwiftEvents, SwiftSlots> {}
export {};
