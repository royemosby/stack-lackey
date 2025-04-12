import styles from './Stage.module.css';

export default function Stage() {
  return (
    <>
      <div className={styles.stage}>
        <h2>Current Speaker</h2>
        <p className={styles.currentSpeaker}>Someone</p>
      </div>
    </>
  );
}
