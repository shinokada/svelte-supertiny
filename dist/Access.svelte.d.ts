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
export type AccessProps = typeof __propDef.props;
export type AccessEvents = typeof __propDef.events;
export type AccessSlots = typeof __propDef.slots;
export default class Access extends SvelteComponent<AccessProps, AccessEvents, AccessSlots> {}
export {};
