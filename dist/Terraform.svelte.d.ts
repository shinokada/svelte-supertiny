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
export type TerraformProps = typeof __propDef.props;
export type TerraformEvents = typeof __propDef.events;
export type TerraformSlots = typeof __propDef.slots;
export default class Terraform extends SvelteComponent<
	TerraformProps,
	TerraformEvents,
	TerraformSlots
> {}
export {};
