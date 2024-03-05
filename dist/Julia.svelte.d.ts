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
export type JuliaProps = typeof __propDef.props;
export type JuliaEvents = typeof __propDef.events;
export type JuliaSlots = typeof __propDef.slots;
export default class Julia extends SvelteComponent<JuliaProps, JuliaEvents, JuliaSlots> {}
export {};
