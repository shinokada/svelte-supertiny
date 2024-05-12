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
export type Auth0Props = typeof __propDef.props;
export type Auth0Events = typeof __propDef.events;
export type Auth0Slots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @prop onclick
 * @prop size = ctx.size || '24'
 * @prop role = ctx.role || 'img'
 * @prop ariaLabel =  "auth0"
 * @prop class: classname
 * @prop withEvents = ctx.withEvents || false
 * @prop title
 * @prop desc
 * @prop ...restProps
 */
export default class Auth0 extends SvelteComponent<Auth0Props, Auth0Events, Auth0Slots> {
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
