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
export type EthereumProps = typeof __propDef.props;
export type EthereumEvents = typeof __propDef.events;
export type EthereumSlots = typeof __propDef.slots;
export default class Ethereum extends SvelteComponent<EthereumProps, EthereumEvents, EthereumSlots> {
}
export {};
