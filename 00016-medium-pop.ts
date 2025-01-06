// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]

type Test = Pop<[3, 2, 1]>


// ============= Your Code Here =============
type Pop<T extends unknown[]> =
  T extends [...infer Head, unknown]
      ? Head
      : []
