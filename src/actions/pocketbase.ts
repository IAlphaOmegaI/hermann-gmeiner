"use server"
import PocketBase from "pocketbase";

export const getPocketBase = async () => {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    pb.autoCancellation(false);
    return pb;
}

type ExtractFunctionParams<F> = F extends (
        pb: PocketBase,
        ...args: infer P
    ) => unknown
    ? P
    : never;

type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;
export const withPocketBase = async <
    F extends (pb: PocketBase, ...args: never[]) => unknown,
>(
    fn: F,
): Promise<((...args: ExtractFunctionParams<F>) => ReturnType<F>)> => {
    return (async (...args: ExtractFunctionParams<F>) => {
        const pb = await getPocketBase();
        return fn(pb, ...args) as UnwrapPromise<ReturnType<F>>;
    }) as (...args: ExtractFunctionParams<F>) => ReturnType<F>;
};

