
import PocketBase from "pocketbase";

export const getPocketBase = () => {
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

export const withPocketBase = <
  F extends (pb: PocketBase, ...args: never[]) => unknown,
>(
  fn: F,
): ((...args: ExtractFunctionParams<F>) => ReturnType<F>) => {
  return (...args: ExtractFunctionParams<F>) => {
    const pb = getPocketBase();
    return fn(pb, ...args) as ReturnType<F>;
  };
};


export const checkPocketBaseHealth = withPocketBase(async (pb) => {
  const check = await pb.health.check();
  console.log(check);
  console.log(pb.baseUrl);
  return check;
});
