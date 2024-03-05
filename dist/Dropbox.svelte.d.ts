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
export type DropboxProps = typeof __propDef.props;
export type DropboxEvents = typeof __propDef.events;
export type DropboxSlots = typeof __propDef.slots;
export default class Dropbox extends SvelteComponent<DropboxProps, DropboxEvents, DropboxSlots> {}
export {};
