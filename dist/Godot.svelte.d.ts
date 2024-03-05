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
export type GodotProps = typeof __propDef.props;
export type GodotEvents = typeof __propDef.events;
export type GodotSlots = typeof __propDef.slots;
export default class Godot extends SvelteComponent<GodotProps, GodotEvents, GodotSlots> {}
export {};
