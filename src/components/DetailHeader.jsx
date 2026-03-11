import styles from './DetailHeader.module.css'

export default function DetailHeader({ subject, tag, dateStr }) {
  return (
    <div className={styles.header}>
      <div className={styles.subject} dangerouslySetInnerHTML={{ __html: subject }} />
      <div className={styles.meta}>
        <div className={styles.from}>
          <div className={styles.avatar}>BC</div>
          <div className={styles.fromInfo}>
            <span className={styles.fromName}>Brad Carter</span>
            <span className={styles.fromEmail}>brad@bradcarter.design</span>
          </div>
        </div>
        <div className={styles.metaRight}>
          <span className={styles.tag}>{tag}</span>
          <span className={styles.dateStr}>{dateStr}</span>
        </div>
      </div>
    </div>
  )
}
