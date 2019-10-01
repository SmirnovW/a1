// Default Select.
import * as React from 'react';
import classNames from 'classnames';

import { Context } from './context';

import styles from './Select.module.css';
import { ContextData } from './context.d';

interface MouseEvent extends Event {
  target: Node | null;
}

type Props = {
  children: Array<React.ReactElement>;
  title: React.ReactNode;
  onClick: (value: React.ReactNode) => void;
};

export const Select: React.FC<Props> = React.memo(
  (props): React.ReactElement => {
    const [data, setData] = React.useState<ContextData>({
      value: props.children[0].props.value,
      label: props.children[0].props.children
    });
    const [isActive, setActivity] = React.useState<boolean>(false);

    /**
     * Handles button click
     */
    const onControlClick = () => setActivity(activity => !activity);

    const select = React.useRef<HTMLButtonElement>(null);

    /**
     * Handle outside click
     * @param {MouseEvent} event - DOM event
     */
    const onOutsideClick = (event: MouseEvent) => {
      if (select.current && select.current.contains(event.target)) return;
      setActivity(false);
    };

    React.useEffect(() => {
      window.addEventListener('click', onOutsideClick);

      return () => {
        window.removeEventListener('click', onOutsideClick);
      };
    }, []);

    return (
      <Context.Provider value={{ data, setData, onChange: props.onClick }}>
        <Context.Consumer>
          {({ data }) => (
            <div
              className={classNames(styles.container, {
                [styles.active]: isActive
              })}
            >
              <p className={styles.title}>{props.title}</p>
              <button
                onClick={onControlClick}
                className={styles.control}
                aria-expanded={isActive}
                ref={select}
              >
                {data.label}
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
