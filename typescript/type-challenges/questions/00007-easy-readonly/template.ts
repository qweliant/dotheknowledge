// make it so that all properties of type T are immutable

// from the previous lesson regarding pick
// we know accessing all poreperties looks like:
// { [P in K]: T[P] }
// to simply access all properties
// { [P in keyof T]: T[P] }

type MyReadonly<T> = { readonly [P in keyof T]: T[P] }
