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
export type MattermostProps = typeof __propDef.props;
export type MattermostEvents = typeof __propDef.events;
export type MattermostSlots = typeof __propDef.slots;
export default class Mattermost extends SvelteComponent<
	MattermostProps,
	MattermostEvents,
	MattermostSlots
> {}
export {};
