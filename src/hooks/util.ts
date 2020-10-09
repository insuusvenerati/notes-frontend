export const isBrowser = (): boolean => ![typeof window, typeof document].includes("undefined");
