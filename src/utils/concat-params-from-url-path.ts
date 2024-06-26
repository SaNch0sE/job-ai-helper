import _ from "lodash";

const concatParamsFromUrlPath = (path: string, newParams: Object): string => {
  const oldParams = new URL(`http://url.com${path}`).searchParams;
  const uniqueParamsObj = Object.fromEntries(new URLSearchParams(oldParams));

  const params = _.extend(uniqueParamsObj, _.mapValues(newParams, (value) => (value.toString())));

  return new URLSearchParams(params).toString();
};

export default concatParamsFromUrlPath;