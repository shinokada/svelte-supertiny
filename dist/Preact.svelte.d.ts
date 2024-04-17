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
export type PreactProps = typeof __propDef.props;
export type PreactEvents = typeof __propDef.events;
export type PreactSlots = typeof __propDef.slots;
export default class Preact extends SvelteComponent<PreactProps, PreactEvents, PreactSlots> {
}
export {};
