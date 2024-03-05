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
export type BlenderProps = typeof __propDef.props;
export type BlenderEvents = typeof __propDef.events;
export type BlenderSlots = typeof __propDef.slots;
export default class Blender extends SvelteComponent<BlenderProps, BlenderEvents, BlenderSlots> {}
export {};
