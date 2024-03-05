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
export type TwilioProps = typeof __propDef.props;
export type TwilioEvents = typeof __propDef.events;
export type TwilioSlots = typeof __propDef.slots;
export default class Twilio extends SvelteComponent<TwilioProps, TwilioEvents, TwilioSlots> {}
export {};
