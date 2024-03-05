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
export type ImgurProps = typeof __propDef.props;
export type ImgurEvents = typeof __propDef.events;
export type ImgurSlots = typeof __propDef.slots;
export default class Imgur extends SvelteComponent<ImgurProps, ImgurEvents, ImgurSlots> {}
export {};
