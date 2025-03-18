/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  // throw 'Not implemented!';
  if (this === null) {
    throw new TypeError('Array value should not be null')
  }

  if (typeof callbackFn !== 'function') {
    throw new TypeError('Callback argument should be function')
  }

  let accumulator = initialValue
  let startIndex = 0

  if (this.length === 0) {
    if (initialValue === undefined) {
      throw new TypeError('initial value should be provided')
    }
    return accumulator
  }

  const values = this.filter(Boolean)

  if (initialValue === undefined) {
    accumulator = values[0]
    startIndex = 1
  }

  for (let i = startIndex; i < values.length; i++) {
    accumulator = callbackFn(accumulator, values[i], i, values)
  }

  return accumulator
}
