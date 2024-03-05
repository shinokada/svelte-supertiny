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
export type ThreadsProps = typeof __propDef.props;
export type ThreadsEvents = typeof __propDef.events;
export type ThreadsSlots = typeof __propDef.slots;
export default class Threads extends SvelteComponent<ThreadsProps, ThreadsEvents, ThreadsSlots> {}
export {};
