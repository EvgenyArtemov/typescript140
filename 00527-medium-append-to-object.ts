// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type test1 = {
  key: 'cat'
  value: 'green'
}

type testExpect1 = {
  key: 'cat'
  value: 'green'
  home: boolean
}

type test2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

type testExpect2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  moon: false | undefined
}

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, 'moon', false | undefined>, testExpect3>>,
]

type Test = AppendToObject<test3, 'moon', false | undefined>

// ============= Your Code Here =============
// doesn't work, incorrect inheritance of type with &
type _AppendToObject<T extends Record<string, any>, U extends string, V> = {
  [P in keyof T]: T[P]
} & {
  [K in U]: V
}


type AppendToObject0<T extends Record<string, any>, U extends string, V> = {
  [P in keyof T | U]: (T & Record<U, V>)[P]
}


type AppendToObject<T extends Record<string, any>, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}