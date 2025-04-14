/**
 * This module exports all symbols from the `./v0.ts` module.
 *
 * @module
 */
export * from "./v0.ts";

/**
 * {@link fetcher} is a function exported from `./v0.ts` that performs a fetch operation.
 *
 * @example
 * ```ts
 * import { fetcher } from "./mod.ts";
 *
 * const result = await fetcher("https://example.com");
 * if (result.ok) {
 *   console.log(result.value);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export { fetcher } from "./v0.ts";

/**
 * {@link FetchError} is an enum exported from `./v0.ts` that defines possible fetch errors.
 */
export { FetchError } from "./v0.ts";

/**
 * {@link FetchResult} is a type exported from `./v0.ts` that represents the result of a fetch operation.
 */
export type { FetchResult } from "./v0.ts";
