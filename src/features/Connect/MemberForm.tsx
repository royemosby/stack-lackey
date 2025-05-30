import styles from './MemberForm.module.css';
import { connect } from '../../services/sync/store';

export default function MemberForm() {
  return (
    <form className={styles.joinForm}>
      <label htmlFor="stackToken">Stack Token</label>
      <input type="text" id="stackToken" />
      <label htmlFor="username">Display Name</label>
      <input type="text" id="username" />
      <button onClick={connect} className={styles.joinButton} type="button">
        Join the Stack
      </button>
    </form>
  );
}
