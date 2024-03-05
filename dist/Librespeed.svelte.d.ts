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
export type LibrespeedProps = typeof __propDef.props;
export type LibrespeedEvents = typeof __propDef.events;
export type LibrespeedSlots = typeof __propDef.slots;
export default class Librespeed extends SvelteComponent<
	LibrespeedProps,
	LibrespeedEvents,
	LibrespeedSlots
> {}
export {};
