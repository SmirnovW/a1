// Default Select.
import * as React from 'react';
import classNames from 'classnames';

import { Context } from '../context/context';
import { ContextData } from '../context/types';

import styles from './Select.css';

interface MouseEvent extends Event {
  target: Node | null;
}

type Props = {
  children: Array<React.ReactElement>;
  title: React.ReactNode;
  onClick: (value: React.ReactNode, name: string) => void;
  name: string;
};

export const Select: React.FC<Props> = React.memo(
  (props): React.ReactElement => {
    const [data, setData] = React.useState<ContextData>({
      value: props.children[0].props.value || '',
      label: props.children[0].props.children || ''
    });
    const [isActive, setActivity] = React.useState<boolean>(false);

    /**
     * Handles button click
     */
    const onControlClick = (): void => {
      setActivity(activity => !activity);
    };

    const select = React.useRef<HTMLButtonElement>(null);

    /**
     * Handle outside click
     * @param {MouseEvent} event - DOM event
     */
    const onOutsideClick = (event: MouseEvent): void => {
      if (select.current && select.current.contains(event.target)) return;
      setActivity(false);
    };

    React.useEffect(() => {
      window.addEventListener('click', onOutsideClick);

      return (): void => {
        window.removeEventListener('click', onOutsideClick);
      };
    }, []);

    return (
      <Context.Provider
        value={{ data, setData, onChange: props.onClick, name: props.name }}
      >
        <Context.Consumer>
          {({ data: { label } }): React.ReactNode => (
            <div
              className={classNames(styles.container, {
                [styles.active]: isActive
              })}
              data-testid="select"
            >
              <p className={styles.title}>{props.title}</p>
              <button
                onClick={onControlClick}
                className={styles.control}
                aria-expanded={isActive}
                ref={select}
                name={props.name}
                type="button"
              >
                {label}
              </button>
              <ul role="listbox" className={styles.list}>
                {props.children}
              </ul>
            </div>
          )}
        </Context.Consumer>
      </Context.Provider>
    );
  }
);
