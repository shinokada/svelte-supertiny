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
export type WorkatoProps = typeof __propDef.props;
export type WorkatoEvents = typeof __propDef.events;
export type WorkatoSlots = typeof __propDef.slots;
export default class Workato extends SvelteComponent<WorkatoProps, WorkatoEvents, WorkatoSlots> {}
export {};
