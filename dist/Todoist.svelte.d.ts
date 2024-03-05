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
export type TodoistProps = typeof __propDef.props;
export type TodoistEvents = typeof __propDef.events;
export type TodoistSlots = typeof __propDef.slots;
export default class Todoist extends SvelteComponent<TodoistProps, TodoistEvents, TodoistSlots> {}
export {};
