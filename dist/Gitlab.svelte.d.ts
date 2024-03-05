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
export type GitlabProps = typeof __propDef.props;
export type GitlabEvents = typeof __propDef.events;
export type GitlabSlots = typeof __propDef.slots;
export default class Gitlab extends SvelteComponent<GitlabProps, GitlabEvents, GitlabSlots> {}
export {};
