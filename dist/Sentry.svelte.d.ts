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
export type SentryProps = typeof __propDef.props;
export type SentryEvents = typeof __propDef.events;
export type SentrySlots = typeof __propDef.slots;
export default class Sentry extends SvelteComponent<SentryProps, SentryEvents, SentrySlots> {}
export {};
