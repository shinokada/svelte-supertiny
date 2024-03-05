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
export type A1PasswordProps = typeof __propDef.props;
export type A1PasswordEvents = typeof __propDef.events;
export type A1PasswordSlots = typeof __propDef.slots;
export default class A1Password extends SvelteComponent<
	A1PasswordProps,
	A1PasswordEvents,
	A1PasswordSlots
> {}
export {};
