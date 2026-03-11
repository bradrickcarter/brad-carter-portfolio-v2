import styles from './StatusBar.module.css'

export default function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <div className={`${styles.item} ${styles.ok}`}>● <span>Connected</span></div>
      <div className={styles.item}>Updated: <span>March 2025</span></div>
      <div className={styles.item}>4 messages, <span>4 unread</span></div>
      <div className={`${styles.item} ${styles.right}`}>bradcarter.design</div>
    </div>
  )
}
