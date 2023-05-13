import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,

  // these test should throw type error when using original solution
  // Expect<Equal<If<'a', 'a', 2>, 2>>,
  // Expect<Equal<If<{}, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>
