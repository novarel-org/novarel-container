/**
 * @fileoverview Define types, interfaces for the container.
 * @author Muhammad Sulman <whomaderules@gmail.com>
 * @version 1.0.0
 * @since 2025-07-17
 */

import { Container } from "./lib/container.js";


/**
 * A unique identifier used to bind and resolve a value from the container.
 * Can be a string or a symbol.
 * @typedef {string | symbol} Token
 */
export type Token = string | symbol;

/**
 * A factory or constructor used to create instances.
 * Can be a class, a constructor, or a factory function.
 * @template T
 */
export type Factory<T = unknown> =
    | { prototype: T }
    | (new (...args: any[]) => T)
    | (() => T)
    | T;

/**
 * A general abstraction for identifying a dependency.
 * Can be a class/factory or a token.
 * @template T
 */
export type Abstract<T = unknown> = Factory<T> | Token;


/**
 * A callback triggered during container events (like resolving).
 * Must return the instance after optional transformation.
 * @template T - The type of instance being handled.
 */
export type EventCb<T = unknown> = (container: Container, instance: T) => void;

/**
 * A callback to extend or decorate a resolved instance.
 * Commonly used for proxies or dynamic wrapping.
 * @template T - The type of instance being extended.
 */
export type ExtenderCb<T = unknown> = (container: Container, instance: T) => T;


/**
 * Represents a service binding in the container.
 * Stores the concrete value/factory and lifecycle configuration.
 * @template T
 */
export interface Binding<T = unknown> {
    concrete: Abstract<T>;
    singleton: boolean;
}
