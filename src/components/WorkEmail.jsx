import { caseStudies } from '../data'
import DetailHeader from './DetailHeader'
import styles from './EmailDetail.module.css'

export default function WorkEmail() {
  return (
    <div className={styles.pane}>
      <DetailHeader
        subject='Selected Work <span class="pop-y">(3 attachments)</span>'
        tag="Work"
        dateStr="2 days ago"
      />
      <div className={styles.body}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hey —</p>
          <p className={styles.p}>
            Here's a selection of recent work. Each one is a little different — but the through-line
            is the same: <em>start with the real problem, stay close to users, ship something that works.</em>
          </p>
          <div className={styles.divider} />

          {caseStudies.map(({ num, tags, title, desc, link }) => (
            <div key={num} className={styles.workEntry}>
              <div className={styles.workEntryHeader}>
                <span className={styles.workNum}>{num} —</span>
                <div className={styles.workTags}>
                  {tags.map(t => <span key={t} className={styles.workTag}>{t}</span>)}
                </div>
              </div>
              <div className={styles.workEntryBody}>
                <div className={styles.workTitle}>{title}</div>
                <div className={styles.workDesc}>{desc}</div>
              </div>
              <a href={link} className={styles.workLink}>View case study ↗</a>
            </div>
          ))}

          <div className={styles.sig}>
            — <strong>Brad Carter</strong><br />
            <a href="mailto:brad@bradcarter.design">brad@bradcarter.design</a>
          </div>
        </div>
      </div>
    </div>
  )
}
