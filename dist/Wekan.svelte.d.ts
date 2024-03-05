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
export type WekanProps = typeof __propDef.props;
export type WekanEvents = typeof __propDef.events;
export type WekanSlots = typeof __propDef.slots;
export default class Wekan extends SvelteComponent<WekanProps, WekanEvents, WekanSlots> {}
export {};
