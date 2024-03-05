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
export type JsonLdProps = typeof __propDef.props;
export type JsonLdEvents = typeof __propDef.events;
export type JsonLdSlots = typeof __propDef.slots;
export default class JsonLd extends SvelteComponent<JsonLdProps, JsonLdEvents, JsonLdSlots> {}
export {};
