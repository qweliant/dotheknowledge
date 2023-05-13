type MyAwaited<T> = T extends Promise<infer _> ? _ : never
