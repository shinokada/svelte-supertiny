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
export type ToxProps = typeof __propDef.props;
export type ToxEvents = typeof __propDef.events;
export type ToxSlots = typeof __propDef.slots;
export default class Tox extends SvelteComponent<ToxProps, ToxEvents, ToxSlots> {}
export {};
