// Default Select.
import * as React from 'react';
import classNames from 'classnames';

import { Context } from './context';

import styles from './SelectItem.module.css';

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
    }, [children, value]);

    /**
     * Handles item click
     */
    const onCLick = () => {
      context.setData({
        value,
        label: children
      });
      context.onChange(value);
    };

    return (
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
