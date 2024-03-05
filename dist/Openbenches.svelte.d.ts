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
export type OpenbenchesProps = typeof __propDef.props;
export type OpenbenchesEvents = typeof __propDef.events;
export type OpenbenchesSlots = typeof __propDef.slots;
export default class Openbenches extends SvelteComponent<
	OpenbenchesProps,
	OpenbenchesEvents,
	OpenbenchesSlots
> {}
export {};
