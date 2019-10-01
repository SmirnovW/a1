import * as React from 'react';

import { ContextData } from './context.d';

export const Context = React.createContext<{
  data: { value: React.ReactNode; label: React.ReactNode };
  setData: React.Dispatch<React.SetStateAction<ContextData>>;
  onChange: (value: React.ReactNode) => any;
}>({
  data: { value: '', label: '' },
  setData: () => {},
  onChange: () => {}
});
