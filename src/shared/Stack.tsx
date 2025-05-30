import styles from './Stack.module.css';

export default function Stack() {
  return (
    <>
      <p className={styles.next}>Up next...</p>
      <ul className={styles.queue}>
        <li>Circea</li>
        <li>Midas</li>
        <li>Achylles</li>
        <li>Medea</li>
        <li>Pinelope</li>
      </ul>
    </>
  );
}
