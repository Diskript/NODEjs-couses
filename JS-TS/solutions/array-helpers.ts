/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(
  source: readonly T[],
  mapper: (item: T, index: number) => R,
): R[] {
  if (source == null) {
    throw new TypeError("Source array is null or undefined");
  }

  let result: R[] = [],
    index = 0;

  for (let element of source) {
    result.push(mapper(element, index));
    index++;
  }

  return result;
}

export function filterArray<T>(
  source: readonly T[],
  predicate: (item: T, index: number) => boolean,
): T[] {
  if (source == null) {
    throw new TypeError("Source array is null or undefined");
  }

  let result: T[] = [],
    index = 0;

  for (let element of source) {
    if (predicate(element, index)) {
      result.push(element);
    }
    index++;
  }
  return result;
}

export function reduceArray<T, R>(
  source: readonly T[],
  reducer: (acc: R, item: T, index: number) => R,
  initial: R,
): R {
  if (source == null) {
    throw new TypeError("Source array is null or undefined");
  }

  let index = 0;
  let result: R = initial;
  for (let element of source) {
    result = reducer(result, element, index);
    index++;
  }

  return result;
}

export function partition<T>(
  source: readonly T[],
  predicate: (item: T) => boolean,
): [T[], T[]] {
  if (source == null) {
    throw new TypeError("Source array is null or undefined");
  }

  const result: [T[], T[]] = [[], []];
  for (let element of source) {
    if (predicate(element)) {
      result[0].push(element);
    } else {
      result[1].push(element);
    }
  }
  return result;
}

export function groupBy<T, K extends PropertyKey>(
  source: readonly T[],
  keySelector: (item: T) => K,
): Record<K, T[]> {
  if (source == null) {
    throw new TypeError("Source array is null or undefined");
  }

  const result: Record<K, T[]> = {} as Record<K, T[]>;
  for (let element of source) {
    let key = keySelector(element);

    if (!result[key]) {
      result[key] = [];
      result[key].push(element);
    } else {
      result[key].push(element);
    }
  }
  return result;
}
