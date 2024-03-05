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
export type GoogleCollaborativeContentToolsProps = typeof __propDef.props;
export type GoogleCollaborativeContentToolsEvents = typeof __propDef.events;
export type GoogleCollaborativeContentToolsSlots = typeof __propDef.slots;
export default class GoogleCollaborativeContentTools extends SvelteComponent<
	GoogleCollaborativeContentToolsProps,
	GoogleCollaborativeContentToolsEvents,
	GoogleCollaborativeContentToolsSlots
> {}
export {};
