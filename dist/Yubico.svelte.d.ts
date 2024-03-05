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
export type YubicoProps = typeof __propDef.props;
export type YubicoEvents = typeof __propDef.events;
export type YubicoSlots = typeof __propDef.slots;
export default class Yubico extends SvelteComponent<YubicoProps, YubicoEvents, YubicoSlots> {}
export {};
