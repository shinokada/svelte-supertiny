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
export type GlitchProps = typeof __propDef.props;
export type GlitchEvents = typeof __propDef.events;
export type GlitchSlots = typeof __propDef.slots;
export default class Glitch extends SvelteComponent<GlitchProps, GlitchEvents, GlitchSlots> {}
export {};
