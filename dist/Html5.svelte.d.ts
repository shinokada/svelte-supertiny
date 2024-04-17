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
export type Html5Props = typeof __propDef.props;
export type Html5Events = typeof __propDef.events;
export type Html5Slots = typeof __propDef.slots;
export default class Html5 extends SvelteComponent<Html5Props, Html5Events, Html5Slots> {
}
export {};
