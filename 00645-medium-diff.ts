// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]

type test = Diff<Coo, Foo>

// ============= Your Code Here =============
type Diff0<T, U> = {
  [P in keyof (T & U) as Exclude<P, keyof T & keyof U>]:
    P extends keyof T
      ? T[P]
      : P extends keyof U
        ? U[P]
        : never
}

type Diff1<T, U> = {
  [P in keyof (T & U) as Exclude<P, keyof T & keyof U>]: (T & U)[P]
}

type Diff<T, U> = Omit<T & U, keyof (T | U)>
