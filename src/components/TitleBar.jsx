import styles from './TitleBar.module.css'

export default function TitleBar({ onMenuClick }) {
  return (
    <div className={styles.titleBar}>
      <div className={styles.winBtns}>
        <div className={`${styles.winBtn} ${styles.r}`} />
        <div className={`${styles.winBtn} ${styles.y}`} />
        <div className={`${styles.winBtn} ${styles.g}`} />
      </div>
      <div className={styles.label}>
        BradMail — <span>brad@bradcarter.design</span>
      </div>
      <button className={styles.menuBtn} onClick={onMenuClick} aria-label="Toggle inbox">
        ☰
      </button>
    </div>
  )
}
