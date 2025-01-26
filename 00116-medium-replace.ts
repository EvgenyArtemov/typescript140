// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]

type Test = Replace<'foobarbar', 'bar', 'foo'>

// ============= Your Code Here =============
type Replace<S extends string, From extends string, To extends string> =
  From extends ''
    ? S
    : S extends `${From}${infer Tail}`
      ? `${To}${Tail}`
      : S extends `${infer Head}${infer Tail}`
        ? `${Head}${Replace<Tail, From, To>}`
        : S