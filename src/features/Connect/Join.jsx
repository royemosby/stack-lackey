import styles from './Join.module.css';

export default function Join() {
  return (
    <form className={styles.joinForm}>
      <label htmlFor="stackToken">Stack Token</label>
      <input type="text" id="stackToken" />
      <label htmlFor="username">Display Name</label>
      <input type="text" id="username" />
      <button disabled className={styles.joinButton} type="button">
        Join the Stack
      </button>
    </form>
  );
}
