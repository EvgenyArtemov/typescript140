// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]


// ============= Your Code Here =============
type Whitespace = ' ' | '\n' | '\t'
type TrimLeft<S extends string> =
  S extends `${Whitespace}${infer U}`
    ? TrimLeft<U>
    : S

type TrimRight<S extends string> =
  S extends `${infer U}${Whitespace}`
    ? TrimRight<U>
    : S

type Trim0<S extends string> = TrimLeft<TrimRight<S>>

type Trim<S extends string> =
  S extends `${Whitespace}${infer U}` | `${infer U}${Whitespace}`
    ? Trim<U>
    : S

