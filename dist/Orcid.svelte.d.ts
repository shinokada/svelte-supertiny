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
export type OrcidProps = typeof __propDef.props;
export type OrcidEvents = typeof __propDef.events;
export type OrcidSlots = typeof __propDef.slots;
export default class Orcid extends SvelteComponent<OrcidProps, OrcidEvents, OrcidSlots> {}
export {};
