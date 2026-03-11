import DetailHeader from './DetailHeader'
import styles from './EmailDetail.module.css'

export default function ContactEmail() {
  return (
    <div className={styles.pane}>
      <DetailHeader
        subject={`Let's build something <span class="pop">good.</span>`}
        tag="Contact"
        dateStr="3 days ago"
      />
      <div className={styles.body}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hey —</p>
          <p className={styles.p}>
            I'm currently open to <strong>Senior Product Designer roles in the DFW area.</strong>{' '}
            If you're building something interesting, I'd genuinely love to hear about it.
          </p>
          <p className={styles.p}>
            I work best in places where design has a real seat at the table — where I can go deep on
            the problem, stay close to users, and collaborate tightly with engineering from day one.{' '}
            <em>Titles matter less than the work.</em>
          </p>
          <div className={styles.divider} />

          <div className={styles.contactBlock}>
            <a href="mailto:brad@bradcarter.design" className={styles.contactRow}>
              <span className={styles.crKey}>EMAIL</span>
              <span className={styles.crVal}>brad@bradcarter.design ↗</span>
            </a>
            <a href="https://bradcarter.design" target="_blank" rel="noreferrer" className={styles.contactRow}>
              <span className={styles.crKey}>WEBSITE</span>
              <span className={styles.crVal}>bradcarter.design ↗</span>
            </a>
            <a href="https://linkedin.com/in/brad-carter-work" target="_blank" rel="noreferrer" className={styles.contactRow}>
              <span className={styles.crKey}>LINKEDIN</span>
              <span className={styles.crVal}>brad-carter-work ↗</span>
            </a>
            <div className={`${styles.contactRow} ${styles.statusRow}`}>
              <span className={styles.crKey}>STATUS</span>
              <span className={`${styles.crVal} ${styles.statusVal}`}>
                <span className={styles.statusDot} />
                OPEN TO WORK
              </span>
            </div>
          </div>

          <div className={styles.sig}>
            — <strong>Brad Carter</strong><br />
            Senior Product Designer · DFW<br />
            <a href="mailto:brad@bradcarter.design">brad@bradcarter.design</a>
          </div>
        </div>
      </div>
    </div>
  )
}
