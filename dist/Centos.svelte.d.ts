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
export type CentosProps = typeof __propDef.props;
export type CentosEvents = typeof __propDef.events;
export type CentosSlots = typeof __propDef.slots;
export default class Centos extends SvelteComponent<CentosProps, CentosEvents, CentosSlots> {}
export {};
