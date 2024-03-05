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
export type JavascriptProps = typeof __propDef.props;
export type JavascriptEvents = typeof __propDef.events;
export type JavascriptSlots = typeof __propDef.slots;
export default class Javascript extends SvelteComponent<
	JavascriptProps,
	JavascriptEvents,
	JavascriptSlots
> {}
export {};
