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
export type JacobinProps = typeof __propDef.props;
export type JacobinEvents = typeof __propDef.events;
export type JacobinSlots = typeof __propDef.slots;
export default class Jacobin extends SvelteComponent<JacobinProps, JacobinEvents, JacobinSlots> {}
export {};
