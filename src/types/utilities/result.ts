export type Result<T = undefined, E = string> =
  | (T extends undefined
      ? {
          success: true;
        }
      : {
          data: T;
          success: true;
        })
  | {
      success: false;
      error: E;
    };
