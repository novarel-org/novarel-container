
/**
 * @fileoverview Dependency Injection Container core logic and interfaces.
 * @author Muhammad Sulman <whomaderules@gmail.com>
 * @version 1.0.0
 * @since 2025-07-17
 */

import { Abstract, Binding, EventCb, ExtenderCb } from "../types";

export class Container {

    /**
     * Novarel Container version.
     */
    public VERSION = "1.0.0";

    /**
     * Instance of container itself if available globally.
     */
    protected _instance: Container;

    /**
     * Resolved bindings within the container.
     */
    protected _resolved: Map<Abstract, Abstract> = new Map();


    /**
     * Instances bound to the container.
     */
    protected _instances: Map<Abstract, unknown> = new Map();

    /**
     * Concretes bound to the container.
     */
    protected _bindings: Map<Abstract, Binding> = new Map();

    /**
     * Scoped bound to the container.
     */
    protected _scopedInstances: Map<Abstract, unknown> = new Map();

    /**
     * Maps alias strings to their corresponding abstract tokens.
     */
    protected _aliases: Map<string, Abstract> = new Map();

    /**
     * Maps abstract tokens back to their primary alias names.
     */
    protected _abstractAlias: Map<Abstract, string> = new Map();
    /**
     * Contextual bindings for specific consumers.
     */
    public _contextual: Map<Abstract, Map<Abstract, Abstract>> = new Map();

    /**
     * Tracks currently resolving abstractions to detect circular dependencies.
     */
    protected _buildStack: Abstract[] = [];

    /**
     * Global callbacks executed before any resolution.
     */
    protected _globalBeforeResolvingCallbacks: EventCb[] = [];

    /**
     * Global callbacks executed while resolving any instance.
     */
    protected _globalResolvingCallbacks: EventCb[] = [];

    /**
     * Global callbacks executed after resolving any instance.
     */
    protected _globalAfterResolvingCallbacks: EventCb[] = [];

    /**
     * Callbacks executed before resolving a specific binding.
     */
    protected _beforeResolvingCallbacks: Map<Abstract, EventCb[]> = new Map();

    /**
     * Callbacks executed during resolution of a specific binding.
     */
    protected _resolvingCallbacks: Map<Abstract, EventCb[]> = new Map();

    /**
     * Callbacks executed after resolving a specific binding.
     */
    protected _afterResolvingCallbacks: Map<Abstract, EventCb[]> = new Map();

    /**
     * Extender callbacks that decorate a resolved instance.
     */
    protected _extenders: Map<Abstract, ExtenderCb[]> = new Map();

    /**
     * Tag names mapped to arrays of abstract identifiers.
     */
    protected _tags: Map<string, Abstract[]> = new Map();

    /**
     * Parameters manually injected into the next resolution call.
     */
    protected _with: Record<string, unknown> = {};



    /**
     * Creates a instance of Container to use
     * it in ServiceProviders.
     */
    constructor () {
        this._instance = this;
    }
};
