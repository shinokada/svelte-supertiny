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
export type DockerProps = typeof __propDef.props;
export type DockerEvents = typeof __propDef.events;
export type DockerSlots = typeof __propDef.slots;
export default class Docker extends SvelteComponent<DockerProps, DockerEvents, DockerSlots> {}
export {};
