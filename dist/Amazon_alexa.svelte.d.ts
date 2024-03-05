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
export type AmazonAlexaProps = typeof __propDef.props;
export type AmazonAlexaEvents = typeof __propDef.events;
export type AmazonAlexaSlots = typeof __propDef.slots;
export default class AmazonAlexa extends SvelteComponent<
	AmazonAlexaProps,
	AmazonAlexaEvents,
	AmazonAlexaSlots
> {}
export {};
