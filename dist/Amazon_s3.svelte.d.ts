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
export type AmazonS3Props = typeof __propDef.props;
export type AmazonS3Events = typeof __propDef.events;
export type AmazonS3Slots = typeof __propDef.slots;
export default class AmazonS3 extends SvelteComponent<
	AmazonS3Props,
	AmazonS3Events,
	AmazonS3Slots
> {}
export {};
