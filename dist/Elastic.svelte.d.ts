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
export type ElasticProps = typeof __propDef.props;
export type ElasticEvents = typeof __propDef.events;
export type ElasticSlots = typeof __propDef.slots;
export default class Elastic extends SvelteComponent<ElasticProps, ElasticEvents, ElasticSlots> {}
export {};
