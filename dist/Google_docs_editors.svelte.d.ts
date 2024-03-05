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
export type GoogleDocsEditorsProps = typeof __propDef.props;
export type GoogleDocsEditorsEvents = typeof __propDef.events;
export type GoogleDocsEditorsSlots = typeof __propDef.slots;
export default class GoogleDocsEditors extends SvelteComponent<
	GoogleDocsEditorsProps,
	GoogleDocsEditorsEvents,
	GoogleDocsEditorsSlots
> {}
export {};
