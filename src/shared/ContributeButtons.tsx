import styles from './ContributeButtons.module.css';
import type { ContributeType } from '../types/store';

export default function ContributeButtons() {
  function handleClick(type: ContributeType) {
    console.log(type);
  }
  return (
    <div className={styles.contributeButtonsWrapper}>
      <button type="button" onClick={() => handleClick('response')}>
        Stack
      </button>
      <button type="button" onClick={() => handleClick('clarify')}>
        Stack?
      </button>
      <button type="button" onClick={() => handleClick('direct response')}>
        Stack@
      </button>
      <button type="button" onClick={() => handleClick('point of order')}>
        Stack!
      </button>
    </div>
  );
}
