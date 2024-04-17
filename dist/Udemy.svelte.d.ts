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
export type UdemyProps = typeof __propDef.props;
export type UdemyEvents = typeof __propDef.events;
export type UdemySlots = typeof __propDef.slots;
export default class Udemy extends SvelteComponent<UdemyProps, UdemyEvents, UdemySlots> {
}
export {};
