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
export type AdobeProps = typeof __propDef.props;
export type AdobeEvents = typeof __propDef.events;
export type AdobeSlots = typeof __propDef.slots;
export default class Adobe extends SvelteComponent<AdobeProps, AdobeEvents, AdobeSlots> {}
export {};
