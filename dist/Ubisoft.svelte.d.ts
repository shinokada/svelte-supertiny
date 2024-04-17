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
export type UbisoftProps = typeof __propDef.props;
export type UbisoftEvents = typeof __propDef.events;
export type UbisoftSlots = typeof __propDef.slots;
export default class Ubisoft extends SvelteComponent<UbisoftProps, UbisoftEvents, UbisoftSlots> {
}
export {};
