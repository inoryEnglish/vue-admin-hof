import { fromPairs } from "lodash-es";

const isFunction = (val: unknown): val is Function => typeof val === "function";

const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === "object";

const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

const isArray = Array.isArray;

const objectToString = Object.prototype.toString;

const toTypeString = (value: unknown): string => objectToString.call(value);

const isDate = (val: unknown): val is Date =>
  toTypeString(val) === "[object Date]";

/**
 * 过滤表单数据
 * @param data
 */
function filterForm(data: object) {
  const key = new Set([undefined, null, "undefined", "null", "", "{}", "[]"]);
  return isObject(data)
    ? fromPairs(Object.entries(data).filter((f) => !key.has(f[1])))
    : {};
}

export {
  isPromise,
  isFunction,
  isObject,
  isArray,
  isDate,
  objectToString,
  toTypeString,
  filterForm,
};
