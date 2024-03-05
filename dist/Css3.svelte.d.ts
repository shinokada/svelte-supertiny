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
export type Css3Props = typeof __propDef.props;
export type Css3Events = typeof __propDef.events;
export type Css3Slots = typeof __propDef.slots;
export default class Css3 extends SvelteComponent<Css3Props, Css3Events, Css3Slots> {}
export {};
