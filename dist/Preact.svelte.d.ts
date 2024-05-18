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
/**
 * [Go to docs](https://svelte-supertiny.codewithshin.com/)
 * ## Props
 * @prop onclick
 * @prop size = ctx.size || '24'
 * @prop role = ctx.role || 'img'
 * @prop ariaLabel =  "preact"
 * @prop class: classname
 * @prop withEvents = ctx.withEvents || false
 * @prop title
 * @prop desc
 * @prop ...restProps
 */
export default class Preact extends SvelteComponent<PreactProps, PreactEvents, PreactSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
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
    }>);
    $$bindings: "";
}
export {};
