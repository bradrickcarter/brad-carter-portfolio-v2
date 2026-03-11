import { skills } from '../data'
import DetailHeader from './DetailHeader'
import styles from './EmailDetail.module.css'

export default function AboutEmail() {
  return (
    <div className={styles.pane}>
      <DetailHeader
        subject='RE: Who is this guy <span class="pop">anyway?</span>'
        tag="About"
        dateStr="Today, 9:41 AM"
      />
      <div className={styles.body}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hey —</p>
          <p className={styles.p}>
            Good question. I'm <strong>Brad Carter</strong> — a Senior Product Designer based in{' '}
            <strong>Dallas / Fort Worth, TX</strong>. I've spent the last 15+ years turning{' '}
            <em>complex, messy problems</em> into experiences that feel simple and obvious in hindsight.
          </p>
          <p className={styles.p}>
            I'm equally at home in Figma sketching flows at 7am or writing the front-end code to bring
            the thing to life by EOD. I've led teams, run discovery workshops with C-suite stakeholders,
            shipped design systems, and somehow still find all of it genuinely interesting.
          </p>
          <p className={styles.p}>
            Currently a <strong>Principal Consultant at Slalom</strong>, where I've been for 11 years
            across healthcare, fintech, and enterprise SaaS. I manage a small team of designers and stay
            close to the work — I'm not a "hands-off" design lead.
          </p>

          {/* Stats */}
          <div className={styles.statRow}>
            <div className={styles.statCell}>
              <div className={styles.statVal}>15<span className={styles.pop}>+</span></div>
              <div className={styles.statLbl}>Years exp.</div>
            </div>
            <div className={styles.statCell}>
              <div className={styles.statVal}>40<span className={styles.pop}>+</span></div>
              <div className={styles.statLbl}>Products shipped</div>
            </div>
            <div className={styles.statCell}>
              <div className={styles.statVal}>11</div>
              <div className={styles.statLbl}>Yrs at Slalom</div>
            </div>
          </div>

          <p className={styles.p}>The skills breakdown, since you asked:</p>

          {/* Skills window */}
          <div className={styles.skillsWin}>
            <div className={styles.skillsBar}>
              <div className={`${styles.swBtn} ${styles.swR}`} />
              <div className={`${styles.swBtn} ${styles.swY}`} />
              <div className={`${styles.swBtn} ${styles.swG}`} />
              <span className={styles.swTitle}>skills.exe</span>
            </div>
            {skills.map(({ name, level }) => (
              <div key={name} className={styles.skillRow}>
                <span className={styles.skillName}>{name}</span>
                <div className={styles.skillBars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={`${styles.sb} ${i <= level ? styles.on : ''}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sig}>
            — <strong>Brad Carter</strong><br />
            Senior Product Designer · DFW<br />
            <a href="mailto:brad@bradcarter.design">brad@bradcarter.design</a>
            {' · '}
            <a href="https://bradcarter.design" target="_blank" rel="noreferrer">bradcarter.design</a>
          </div>
        </div>
      </div>
    </div>
  )
}
