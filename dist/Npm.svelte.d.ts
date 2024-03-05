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
export type NpmProps = typeof __propDef.props;
export type NpmEvents = typeof __propDef.events;
export type NpmSlots = typeof __propDef.slots;
export default class Npm extends SvelteComponent<NpmProps, NpmEvents, NpmSlots> {}
export {};
