// has it home yet tjhat T is a type

type First<T extends any[]> = T extends never[] ? never : T[0]
