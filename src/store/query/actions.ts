export const QUERY = {
  SET_PARAMETERS: 'QUERY@SET_PARAMETERS'
};

export function setQuery(data: {
  [key: string]: string | number;
}): InterfaceAction<{ [key: string]: string | number }> {
  return {
    type: QUERY.SET_PARAMETERS,
    payload: data
  };
}
