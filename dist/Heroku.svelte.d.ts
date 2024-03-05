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
export type HerokuProps = typeof __propDef.props;
export type HerokuEvents = typeof __propDef.events;
export type HerokuSlots = typeof __propDef.slots;
export default class Heroku extends SvelteComponent<HerokuProps, HerokuEvents, HerokuSlots> {}
export {};
