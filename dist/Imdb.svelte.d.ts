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
export type ImdbProps = typeof __propDef.props;
export type ImdbEvents = typeof __propDef.events;
export type ImdbSlots = typeof __propDef.slots;
export default class Imdb extends SvelteComponent<ImdbProps, ImdbEvents, ImdbSlots> {}
export {};
