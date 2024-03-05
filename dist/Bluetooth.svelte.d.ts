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
export type BluetoothProps = typeof __propDef.props;
export type BluetoothEvents = typeof __propDef.events;
export type BluetoothSlots = typeof __propDef.slots;
export default class Bluetooth extends SvelteComponent<
	BluetoothProps,
	BluetoothEvents,
	BluetoothSlots
> {}
export {};
