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
export type AnsibleProps = typeof __propDef.props;
export type AnsibleEvents = typeof __propDef.events;
export type AnsibleSlots = typeof __propDef.slots;
export default class Ansible extends SvelteComponent<AnsibleProps, AnsibleEvents, AnsibleSlots> {}
export {};
