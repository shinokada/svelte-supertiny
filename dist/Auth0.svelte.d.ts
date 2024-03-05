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
export type Auth0Props = typeof __propDef.props;
export type Auth0Events = typeof __propDef.events;
export type Auth0Slots = typeof __propDef.slots;
export default class Auth0 extends SvelteComponent<Auth0Props, Auth0Events, Auth0Slots> {}
export {};
