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
export type CitrixCompactProps = typeof __propDef.props;
export type CitrixCompactEvents = typeof __propDef.events;
export type CitrixCompactSlots = typeof __propDef.slots;
export default class CitrixCompact extends SvelteComponent<
	CitrixCompactProps,
	CitrixCompactEvents,
	CitrixCompactSlots
> {}
export {};
