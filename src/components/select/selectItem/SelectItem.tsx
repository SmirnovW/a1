// Default Select.
import * as React from 'react';

import { Context } from '../context/context';

import styles from './SelectItem.css';

type Props = {
  children: React.ReactNode;
  selected?: boolean;
  value: React.ReactNode;
};

export const SelectItem: React.FC<Props> = React.memo(
  ({ selected = false, value, children }): React.ReactElement => {
    const context = React.useContext(Context);

    React.useEffect(() => {
      if (selected) {
        context.setData({ value, label: children });
      }
    }, [children, value, selected]);

    /**
     * Handles item click
     */
    const onCLick = (): void => {
      context.setData({
        value,
        label: children
      });
      context.onChange(value, context.name);
    };

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <li
        onClick={onCLick}
        className={styles.container}
        role="option"
        aria-selected={selected}
      >
        {children}
      </li>
    );
  }
);
