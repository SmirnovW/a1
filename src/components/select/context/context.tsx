import * as React from 'react';

import { ContextData } from './types';

export const Context = React.createContext<{
  data: { value: React.ReactNode; label: React.ReactNode };
  setData: React.Dispatch<React.SetStateAction<ContextData>>;
  onChange: (value: React.ReactNode, name: string) => void;
  name: string;
}>({
  data: { value: '', label: '' },
  setData: () => {},
  onChange: () => {},
  name: ''
});
