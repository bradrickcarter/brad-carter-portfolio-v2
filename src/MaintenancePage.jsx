import styles from './MaintenancePage.module.css'

export default function MaintenancePage() {
  return (
    <div className={styles.shell}>
      <div className={styles.card}>
        <div className={styles.winBtns}>
          <div className={`${styles.winBtn} ${styles.r}`} />
          <div className={`${styles.winBtn} ${styles.y}`} />
          <div className={`${styles.winBtn} ${styles.g}`} />
        </div>

        <div className={styles.titleBar}>
          BradMail — <span>brad@bradcarter.design</span>
        </div>

        <div className={styles.body}>
          <p className={styles.prompt}>
            <span className={styles.arrow}>&gt;</span> status.check
          </p>

          <h1 className={styles.heading}>
            Site under construction
            <span className={styles.cursor}>_</span>
          </h1>

          <p className={styles.message}>
            Thanks for stopping by. I&apos;m currently updating this site with
            new work and improvements. Check back soon — it won&apos;t be long.
          </p>

          <div className={styles.divider} />

          <p className={styles.contact}>
            In the meantime, reach me at{' '}
            <a href="mailto:brad@bradcarter.design" className={styles.link}>
              brad@bradcarter.design
            </a>
          </p>

          <p className={styles.prompt} style={{ marginTop: '2rem' }}>
            <span className={styles.arrow}>&gt;</span>{' '}
            <span className={styles.blink}>█</span>
          </p>
        </div>
      </div>
    </div>
  )
}
