// type If<C, T, F> = C extends true ? T : F
// using this new test case we see how c not being vailadted creates an implicit cast
type If<C extends boolean, T, F> = C extends true ? T : F
