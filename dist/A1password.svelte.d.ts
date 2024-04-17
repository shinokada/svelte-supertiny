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
export type A1passwordProps = typeof __propDef.props;
export type A1passwordEvents = typeof __propDef.events;
export type A1passwordSlots = typeof __propDef.slots;
export default class A1password extends SvelteComponent<A1passwordProps, A1passwordEvents, A1passwordSlots> {
}
export {};
