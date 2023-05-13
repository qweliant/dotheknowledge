type Concat<T extends any[], U extends any[]> = [...T, ...U]
// we extend two generics to be an array of any type and concatonate the two using a spread operator
