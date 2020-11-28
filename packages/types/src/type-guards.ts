/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {ITeam} from './types'

/**
 * Check whether a given value is an array where
 * each member is of a specified type
 *
 * @param arr - array to check
 * @param check - type guard to use when evaluating each item
 * @public
 */
export function isTypedArray<T>(
  arr: unknown,
  check: (x: unknown) => x is T,
): arr is T[] {
  if (!Array.isArray(arr)) return false
  if (arr.some(item => !check(item))) return false
  return true
}

/**
 * Check whether a given value is an {@link @change/types#ITeam}
 * @param arg - value to check
 * @beta
 *
 * @example
 * Here's an example of how to use this guard
 * ```ts
 * const team = { id: 'li', name: 'Charlie' };
 * isTeam(team); // true
 * ```
 */
export function isTeam(arg: any): arg is ITeam {
  return (
    typeof arg.name === 'string' &&
    typeof arg.id === 'string' &&
    Array.isArray(arg.channels)
  )
}
