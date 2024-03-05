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
export type BaiduProps = typeof __propDef.props;
export type BaiduEvents = typeof __propDef.events;
export type BaiduSlots = typeof __propDef.slots;
export default class Baidu extends SvelteComponent<BaiduProps, BaiduEvents, BaiduSlots> {}
export {};
