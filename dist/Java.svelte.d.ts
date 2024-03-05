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
export type JavaProps = typeof __propDef.props;
export type JavaEvents = typeof __propDef.events;
export type JavaSlots = typeof __propDef.slots;
export default class Java extends SvelteComponent<JavaProps, JavaEvents, JavaSlots> {}
export {};
