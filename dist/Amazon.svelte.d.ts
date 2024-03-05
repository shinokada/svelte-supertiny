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
export type AmazonProps = typeof __propDef.props;
export type AmazonEvents = typeof __propDef.events;
export type AmazonSlots = typeof __propDef.slots;
export default class Amazon extends SvelteComponent<AmazonProps, AmazonEvents, AmazonSlots> {}
export {};
