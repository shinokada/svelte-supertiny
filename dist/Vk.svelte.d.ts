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
export type VkProps = typeof __propDef.props;
export type VkEvents = typeof __propDef.events;
export type VkSlots = typeof __propDef.slots;
export default class Vk extends SvelteComponent<VkProps, VkEvents, VkSlots> {}
export {};
