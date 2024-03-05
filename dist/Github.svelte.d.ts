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
export type GithubProps = typeof __propDef.props;
export type GithubEvents = typeof __propDef.events;
export type GithubSlots = typeof __propDef.slots;
export default class Github extends SvelteComponent<GithubProps, GithubEvents, GithubSlots> {}
export {};
