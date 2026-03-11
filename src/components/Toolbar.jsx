import styles from './Toolbar.module.css'

export default function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <button className={styles.btn}>← Back</button>
      <button className={styles.btn}>Fwd →</button>
      <div className={styles.sep} />
      <button className={styles.btn}>Archive</button>
      <button className={styles.btn}>Delete</button>
      <div className={styles.sep} />
      <button className={styles.btn}>Flag</button>
      <button className={styles.btn}>More</button>
      <div className={styles.right}>
        <input className={styles.search} type="text" placeholder="search mail..." />
      </div>
    </div>
  )
}
