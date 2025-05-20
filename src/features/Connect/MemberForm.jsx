import styles from './MemberForm.module.css';

export default function MemberForm() {
  return (
    <form className={styles.joinForm}>
      <label htmlFor="rejoin">Rejoin existing stack?</label>
      <input type="checkbox" />
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
