// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

type Test = Last<[1,2,3]>


// ============= Your Code Here =============
//  ...any also works with ...unknown[]
type Last<T extends unknown[]> = T extends [...any, infer Tail] ? Tail : never
