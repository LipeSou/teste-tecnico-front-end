export function clsx(...classes: unknown[]) {
  return classes.flat(Infinity).filter(Boolean).join(" ");
}
