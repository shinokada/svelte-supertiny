import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        onclick?: (() => void) | undefined;
        size?: string | undefined;
        role?: string | undefined;
        ariaLabel?: string | undefined;
        class?: string | undefined;
        withEvents?: boolean | undefined;
        title?: {
            id?: string | undefined;
            title?: string | undefined;
        } | undefined;
        desc?: {
            id?: string | undefined;
            desc?: string | undefined;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type I18nextProps = typeof __propDef.props;
export type I18nextEvents = typeof __propDef.events;
export type I18nextSlots = typeof __propDef.slots;
export default class I18next extends SvelteComponent<I18nextProps, I18nextEvents, I18nextSlots> {
}
export {};
