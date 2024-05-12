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
export type GuacamoleProps = typeof __propDef.props;
export type GuacamoleEvents = typeof __propDef.events;
export type GuacamoleSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @prop onclick
 * @prop size = ctx.size || '24'
 * @prop role = ctx.role || 'img'
 * @prop ariaLabel =  "guacamole"
 * @prop class: classname
 * @prop withEvents = ctx.withEvents || false
 * @prop title
 * @prop desc
 * @prop ...restProps
 */
export default class Guacamole extends SvelteComponent<GuacamoleProps, GuacamoleEvents, GuacamoleSlots> {
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
