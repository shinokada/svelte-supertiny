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
export type GradleProps = typeof __propDef.props;
export type GradleEvents = typeof __propDef.events;
export type GradleSlots = typeof __propDef.slots;
export default class Gradle extends SvelteComponent<GradleProps, GradleEvents, GradleSlots> {}
export {};
