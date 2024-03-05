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
export type WikipediaProps = typeof __propDef.props;
export type WikipediaEvents = typeof __propDef.events;
export type WikipediaSlots = typeof __propDef.slots;
export default class Wikipedia extends SvelteComponent<
	WikipediaProps,
	WikipediaEvents,
	WikipediaSlots
> {}
export {};
