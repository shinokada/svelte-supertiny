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
export type GitProps = typeof __propDef.props;
export type GitEvents = typeof __propDef.events;
export type GitSlots = typeof __propDef.slots;
export default class Git extends SvelteComponent<GitProps, GitEvents, GitSlots> {}
export {};
