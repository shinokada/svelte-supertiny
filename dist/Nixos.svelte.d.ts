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
export type NixosProps = typeof __propDef.props;
export type NixosEvents = typeof __propDef.events;
export type NixosSlots = typeof __propDef.slots;
export default class Nixos extends SvelteComponent<NixosProps, NixosEvents, NixosSlots> {}
export {};
