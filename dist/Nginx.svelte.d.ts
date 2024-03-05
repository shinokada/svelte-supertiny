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
export type NginxProps = typeof __propDef.props;
export type NginxEvents = typeof __propDef.events;
export type NginxSlots = typeof __propDef.slots;
export default class Nginx extends SvelteComponent<NginxProps, NginxEvents, NginxSlots> {}
export {};
