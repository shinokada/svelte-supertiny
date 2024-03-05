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
export type CodepenProps = typeof __propDef.props;
export type CodepenEvents = typeof __propDef.events;
export type CodepenSlots = typeof __propDef.slots;
export default class Codepen extends SvelteComponent<CodepenProps, CodepenEvents, CodepenSlots> {}
export {};
