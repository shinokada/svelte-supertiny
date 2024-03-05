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
export type GoogleDriveProps = typeof __propDef.props;
export type GoogleDriveEvents = typeof __propDef.events;
export type GoogleDriveSlots = typeof __propDef.slots;
export default class GoogleDrive extends SvelteComponent<
	GoogleDriveProps,
	GoogleDriveEvents,
	GoogleDriveSlots
> {}
export {};
