import StackContributionButtons from '../shared/StackContributionButtons';
import Stack from '../shared/Stack';
import Stage from '../shared/Stage';
import styles from './Keeper.module.css';
export default function Keeper() {
  return (
    <>
      <h2>Keeper</h2>
      <Stage />
      <Stack />
      <StackContributionButtons />
      <div className={styles.keeperControls}>
        <button>Pause contributions</button>
        <button>Next contributor</button>
        <button>Time ran out</button>
        <button>Veering off topic</button>
      </div>
    </>
  );
}
