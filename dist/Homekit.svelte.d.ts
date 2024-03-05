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
export type HomekitProps = typeof __propDef.props;
export type HomekitEvents = typeof __propDef.events;
export type HomekitSlots = typeof __propDef.slots;
export default class Homekit extends SvelteComponent<HomekitProps, HomekitEvents, HomekitSlots> {}
export {};
