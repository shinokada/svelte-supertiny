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
export type NextcloudProps = typeof __propDef.props;
export type NextcloudEvents = typeof __propDef.events;
export type NextcloudSlots = typeof __propDef.slots;
export default class Nextcloud extends SvelteComponent<
	NextcloudProps,
	NextcloudEvents,
	NextcloudSlots
> {}
export {};
