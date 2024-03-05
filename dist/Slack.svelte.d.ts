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
export type SlackProps = typeof __propDef.props;
export type SlackEvents = typeof __propDef.events;
export type SlackSlots = typeof __propDef.slots;
export default class Slack extends SvelteComponent<SlackProps, SlackEvents, SlackSlots> {}
export {};
