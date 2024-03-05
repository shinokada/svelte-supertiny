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
export type KeepassdxProps = typeof __propDef.props;
export type KeepassdxEvents = typeof __propDef.events;
export type KeepassdxSlots = typeof __propDef.slots;
export default class Keepassdx extends SvelteComponent<
	KeepassdxProps,
	KeepassdxEvents,
	KeepassdxSlots
> {}
export {};
