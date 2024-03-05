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
export type MinecraftProps = typeof __propDef.props;
export type MinecraftEvents = typeof __propDef.events;
export type MinecraftSlots = typeof __propDef.slots;
export default class Minecraft extends SvelteComponent<
	MinecraftProps,
	MinecraftEvents,
	MinecraftSlots
> {}
export {};
