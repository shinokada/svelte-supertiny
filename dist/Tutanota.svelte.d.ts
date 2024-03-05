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
export type TutanotaProps = typeof __propDef.props;
export type TutanotaEvents = typeof __propDef.events;
export type TutanotaSlots = typeof __propDef.slots;
export default class Tutanota extends SvelteComponent<
	TutanotaProps,
	TutanotaEvents,
	TutanotaSlots
> {}
export {};
