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
export type PhpProps = typeof __propDef.props;
export type PhpEvents = typeof __propDef.events;
export type PhpSlots = typeof __propDef.slots;
export default class Php extends SvelteComponent<PhpProps, PhpEvents, PhpSlots> {}
export {};
