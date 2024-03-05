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
export type AzureProps = typeof __propDef.props;
export type AzureEvents = typeof __propDef.events;
export type AzureSlots = typeof __propDef.slots;
export default class Azure extends SvelteComponent<AzureProps, AzureEvents, AzureSlots> {}
export {};
