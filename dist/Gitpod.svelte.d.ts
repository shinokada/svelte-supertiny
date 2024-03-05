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
export type GitpodProps = typeof __propDef.props;
export type GitpodEvents = typeof __propDef.events;
export type GitpodSlots = typeof __propDef.slots;
export default class Gitpod extends SvelteComponent<GitpodProps, GitpodEvents, GitpodSlots> {}
export {};
