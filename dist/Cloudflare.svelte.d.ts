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
export type CloudflareProps = typeof __propDef.props;
export type CloudflareEvents = typeof __propDef.events;
export type CloudflareSlots = typeof __propDef.slots;
export default class Cloudflare extends SvelteComponent<
	CloudflareProps,
	CloudflareEvents,
	CloudflareSlots
> {}
export {};
