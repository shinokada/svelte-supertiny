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
export type KaggleProps = typeof __propDef.props;
export type KaggleEvents = typeof __propDef.events;
export type KaggleSlots = typeof __propDef.slots;
export default class Kaggle extends SvelteComponent<KaggleProps, KaggleEvents, KaggleSlots> {}
export {};
