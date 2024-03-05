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
export type PdfProps = typeof __propDef.props;
export type PdfEvents = typeof __propDef.events;
export type PdfSlots = typeof __propDef.slots;
export default class Pdf extends SvelteComponent<PdfProps, PdfEvents, PdfSlots> {}
export {};
