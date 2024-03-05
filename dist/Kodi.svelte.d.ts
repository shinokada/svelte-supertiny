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
export type KodiProps = typeof __propDef.props;
export type KodiEvents = typeof __propDef.events;
export type KodiSlots = typeof __propDef.slots;
export default class Kodi extends SvelteComponent<KodiProps, KodiEvents, KodiSlots> {}
export {};
