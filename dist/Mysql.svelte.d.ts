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
export type MysqlProps = typeof __propDef.props;
export type MysqlEvents = typeof __propDef.events;
export type MysqlSlots = typeof __propDef.slots;
export default class Mysql extends SvelteComponent<MysqlProps, MysqlEvents, MysqlSlots> {}
export {};
