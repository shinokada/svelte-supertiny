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
export type DeezerProps = typeof __propDef.props;
export type DeezerEvents = typeof __propDef.events;
export type DeezerSlots = typeof __propDef.slots;
export default class Deezer extends SvelteComponent<DeezerProps, DeezerEvents, DeezerSlots> {}
export {};
