type MyExclude<T, U> = T extends U ? never : T
// excludes U as class of T ???
