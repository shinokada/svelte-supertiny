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
export type MatrixProps = typeof __propDef.props;
export type MatrixEvents = typeof __propDef.events;
export type MatrixSlots = typeof __propDef.slots;
export default class Matrix extends SvelteComponent<MatrixProps, MatrixEvents, MatrixSlots> {}
export {};
