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
export type PythonProps = typeof __propDef.props;
export type PythonEvents = typeof __propDef.events;
export type PythonSlots = typeof __propDef.slots;
export default class Python extends SvelteComponent<PythonProps, PythonEvents, PythonSlots> {}
export {};
