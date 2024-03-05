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
export type JsonProps = typeof __propDef.props;
export type JsonEvents = typeof __propDef.events;
export type JsonSlots = typeof __propDef.slots;
export default class Json extends SvelteComponent<JsonProps, JsonEvents, JsonSlots> {}
export {};
