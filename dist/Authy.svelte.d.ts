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
export type AuthyProps = typeof __propDef.props;
export type AuthyEvents = typeof __propDef.events;
export type AuthySlots = typeof __propDef.slots;
export default class Authy extends SvelteComponent<AuthyProps, AuthyEvents, AuthySlots> {}
export {};
