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
export type WechatProps = typeof __propDef.props;
export type WechatEvents = typeof __propDef.events;
export type WechatSlots = typeof __propDef.slots;
export default class Wechat extends SvelteComponent<WechatProps, WechatEvents, WechatSlots> {}
export {};
