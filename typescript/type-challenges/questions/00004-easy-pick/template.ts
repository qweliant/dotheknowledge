// we often use the Pick type to type an object T with any of property K in T

// TS source code has the type signiture T, K extends keyof T.
// It still shouldnt work if just drop it in like so:
// type MyPick<T, K extends keyof T> = any

// thats because the TS object needs to return an object.
// that shape should return a list of properties in T with K
// in TS that looks like
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

// verbally, for p in k return t.p
// code
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
