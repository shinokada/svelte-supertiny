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
export type QuoraProps = typeof __propDef.props;
export type QuoraEvents = typeof __propDef.events;
export type QuoraSlots = typeof __propDef.slots;
export default class Quora extends SvelteComponent<QuoraProps, QuoraEvents, QuoraSlots> {}
export {};
