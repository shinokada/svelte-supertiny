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
export type ManjaroProps = typeof __propDef.props;
export type ManjaroEvents = typeof __propDef.events;
export type ManjaroSlots = typeof __propDef.slots;
export default class Manjaro extends SvelteComponent<ManjaroProps, ManjaroEvents, ManjaroSlots> {}
export {};
