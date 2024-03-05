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
export type EcosiaProps = typeof __propDef.props;
export type EcosiaEvents = typeof __propDef.events;
export type EcosiaSlots = typeof __propDef.slots;
export default class Ecosia extends SvelteComponent<EcosiaProps, EcosiaEvents, EcosiaSlots> {}
export {};
