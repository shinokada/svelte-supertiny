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
export type GoogleProps = typeof __propDef.props;
export type GoogleEvents = typeof __propDef.events;
export type GoogleSlots = typeof __propDef.slots;
export default class Google extends SvelteComponent<GoogleProps, GoogleEvents, GoogleSlots> {}
export {};
