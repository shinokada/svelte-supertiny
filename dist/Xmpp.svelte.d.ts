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
export type XmppProps = typeof __propDef.props;
export type XmppEvents = typeof __propDef.events;
export type XmppSlots = typeof __propDef.slots;
export default class Xmpp extends SvelteComponent<XmppProps, XmppEvents, XmppSlots> {}
export {};
