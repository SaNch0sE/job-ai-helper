import projectConstants from "./constants";

export function toFormValue(value: string) {
  return value === projectConstants.nullString ? '' : value;
}