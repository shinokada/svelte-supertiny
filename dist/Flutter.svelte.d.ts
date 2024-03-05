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
export type FlutterProps = typeof __propDef.props;
export type FlutterEvents = typeof __propDef.events;
export type FlutterSlots = typeof __propDef.slots;
export default class Flutter extends SvelteComponent<FlutterProps, FlutterEvents, FlutterSlots> {}
export {};
