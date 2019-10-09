export function toQueryString(obj: { [key: string]: string | number }): string {
  return Object.keys(obj)
    .reduce(
      (accum, key) => {
        accum.push(`${key}=${obj[key]}`);
        return accum;
      },
      [] as Array<string>
    )
    .join('&');
}

export function parseQueryString(search: string): { [key: string]: string } {
  if (!search) return {};
  return search
    .slice(1)
    .split('&')
    .reduce((accum: { [key: string]: string }, query: string) => {
      const [key, value] = query.split('=');
      accum[key] = value;
      return accum;
    }, {});
}
