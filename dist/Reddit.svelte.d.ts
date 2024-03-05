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
export type RedditProps = typeof __propDef.props;
export type RedditEvents = typeof __propDef.events;
export type RedditSlots = typeof __propDef.slots;
export default class Reddit extends SvelteComponent<RedditProps, RedditEvents, RedditSlots> {}
export {};
