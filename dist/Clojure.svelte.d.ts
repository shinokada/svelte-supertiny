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
export type ClojureProps = typeof __propDef.props;
export type ClojureEvents = typeof __propDef.events;
export type ClojureSlots = typeof __propDef.slots;
export default class Clojure extends SvelteComponent<ClojureProps, ClojureEvents, ClojureSlots> {}
export {};
