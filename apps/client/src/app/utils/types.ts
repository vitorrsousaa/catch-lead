export type WithCondition<T> = T & { condition?: Status };

export type Status = "pending" | "error";

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
