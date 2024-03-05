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
export type GrafanaProps = typeof __propDef.props;
export type GrafanaEvents = typeof __propDef.events;
export type GrafanaSlots = typeof __propDef.slots;
export default class Grafana extends SvelteComponent<GrafanaProps, GrafanaEvents, GrafanaSlots> {}
export {};
