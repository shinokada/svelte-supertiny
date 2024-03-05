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
export type ZorinosProps = typeof __propDef.props;
export type ZorinosEvents = typeof __propDef.events;
export type ZorinosSlots = typeof __propDef.slots;
export default class Zorinos extends SvelteComponent<ZorinosProps, ZorinosEvents, ZorinosSlots> {}
export {};
