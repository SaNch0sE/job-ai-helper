export default function setSearchParams<T extends Object>(params: T) {
  const arrParams = Object.entries(params);

  return arrParams.reduce((prev: string, entry: [string, any]) => {
    const params = new URLSearchParams(prev);
    params.set(entry[0], entry[1]);
  
    return params.toString();
  }, '');
}