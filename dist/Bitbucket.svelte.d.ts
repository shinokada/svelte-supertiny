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
export type BitbucketProps = typeof __propDef.props;
export type BitbucketEvents = typeof __propDef.events;
export type BitbucketSlots = typeof __propDef.slots;
export default class Bitbucket extends SvelteComponent<
	BitbucketProps,
	BitbucketEvents,
	BitbucketSlots
> {}
export {};
