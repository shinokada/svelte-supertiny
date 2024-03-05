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
export type SvgProps = typeof __propDef.props;
export type SvgEvents = typeof __propDef.events;
export type SvgSlots = typeof __propDef.slots;
export default class Svg extends SvelteComponent<SvgProps, SvgEvents, SvgSlots> {}
export {};
