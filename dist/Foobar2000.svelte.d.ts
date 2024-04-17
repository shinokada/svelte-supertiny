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
export type Foobar2000Props = typeof __propDef.props;
export type Foobar2000Events = typeof __propDef.events;
export type Foobar2000Slots = typeof __propDef.slots;
export default class Foobar2000 extends SvelteComponent<Foobar2000Props, Foobar2000Events, Foobar2000Slots> {
}
export {};
