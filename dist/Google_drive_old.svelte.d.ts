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
export type GoogleDriveOldProps = typeof __propDef.props;
export type GoogleDriveOldEvents = typeof __propDef.events;
export type GoogleDriveOldSlots = typeof __propDef.slots;
export default class GoogleDriveOld extends SvelteComponent<
	GoogleDriveOldProps,
	GoogleDriveOldEvents,
	GoogleDriveOldSlots
> {}
export {};
