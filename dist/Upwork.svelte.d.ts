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
export type UpworkProps = typeof __propDef.props;
export type UpworkEvents = typeof __propDef.events;
export type UpworkSlots = typeof __propDef.slots;
export default class Upwork extends SvelteComponent<UpworkProps, UpworkEvents, UpworkSlots> {
}
export {};
