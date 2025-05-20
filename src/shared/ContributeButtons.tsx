import styles from './ContributeButtons.module.css';

export default function ContributeButtons() {
  function handleClick(type) {
    console.log(type);
  }
  return (
    <div className={styles.contributeButtonsWrapper}>
      <button onClick={() => handleClick('response')}>Stack</button>
      <button onClick={() => handleClick('clarify')}>Stack?</button>
      <button onClick={() => handleClick('direct response')}>Stack@</button>
      <button onClick={() => handleClick('point of order')}>Stack!</button>
    </div>
  );
}
