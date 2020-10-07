import * as React from "react";

export const delay = (time: number) => (
  promiseResult: Promise<{ default: React.ComponentType<any> }>
) =>
  new Promise<{ default: React.ComponentType<any> }>((resolve) =>
    setTimeout(() => resolve(promiseResult), time)
  );
