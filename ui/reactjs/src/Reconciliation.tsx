/**
 * @name RECONCILIATION
 *
 * @description
 *
 * - the process/method that React does for diffing between the DOMs to update
 * - implements with heuristic O(n) algorithm
 * - heuristic:
 *      - its a solution for a problem
 *      - Quick decision making
 *      - fast & accurate
 *
 * - applying this algorithm in two assumptions:
 *  - (virutualDOM !== curDOM) => newDOM Tree
 *  - using a unique `key` which given by the developer
 *
 * - Diffing:
 *    - start from the `root` elements => do traverse
 *    - if only found attributes changes => updates only the attributes
 *    - if found DOM/element changes => old tree will be destroyed and new dom tree will be created
 *
 * - DONTs
 *   - key should not be `numbers/random numbers`
 *   - key should be unique
 *
 *
 */
