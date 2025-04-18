import styles from './StackContributionButtons.module.css';

export default function StackContributionButtons() {
  function handleClick(type) {
    console.log(type);
  }
  return (
    <div className={styles.contributionButtonsWrapper}>
      <button onClick={() => handleClick('response')}>Stack</button>
      <button onClick={() => handleClick('clarify')}>Stack?</button>
      <button onClick={() => handleClick('direct response')}>Stack@</button>
      <button onClick={() => handleClick('point of order')}>Stack!</button>
    </div>
  );
}
