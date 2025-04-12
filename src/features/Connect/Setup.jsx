import styles from './Setup.module.css';

export default function Setup() {
  return (
    <form className={styles.setupForm}>
      <label htmlFor="keeperSecret">Keeper Secret</label>
      <input type="text" id="keeperSecret" />
      <label htmlFor="username">Display Name</label>
      <input type="text" id="username" />
      <button disabled className={styles.setupButton} type="button">
        Start a Stack
      </button>
      <button disabled className={styles.setupButton} type="button">
        Reconnect to an existing Stack
      </button>
    </form>
  );
}
