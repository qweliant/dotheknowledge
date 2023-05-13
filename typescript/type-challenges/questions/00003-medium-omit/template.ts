type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] }
// i should remeber to treat the objects being passed into the genrics as the things im typing