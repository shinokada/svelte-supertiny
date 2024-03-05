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
export type DroneProps = typeof __propDef.props;
export type DroneEvents = typeof __propDef.events;
export type DroneSlots = typeof __propDef.slots;
export default class Drone extends SvelteComponent<DroneProps, DroneEvents, DroneSlots> {}
export {};
