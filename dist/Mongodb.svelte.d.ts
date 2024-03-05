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
export type MongodbProps = typeof __propDef.props;
export type MongodbEvents = typeof __propDef.events;
export type MongodbSlots = typeof __propDef.slots;
export default class Mongodb extends SvelteComponent<MongodbProps, MongodbEvents, MongodbSlots> {}
export {};
