import DetailHeader from './DetailHeader'
import styles from './EmailDetail.module.css'

export default function ResumeEmail() {
  return (
    <div className={styles.pane}>
      <DetailHeader
        subject={`📎 Resume.pdf — <span class="pop-y">here's the full story</span>`}
        tag="Resume"
        dateStr="1 week ago"
      />
      <div className={styles.body}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hey —</p>
          <p className={styles.p}>
            Full resume attached below. The short version:{' '}
            <strong>15+ years, two companies, a lot of shipped work,</strong> and a genuine love for
            the craft that hasn't worn off.
          </p>
          <div className={styles.divider} />

          <p className={styles.p}><strong>Slalom Consulting</strong> — 2015 to present</p>
          <p className={styles.p} style={{ marginTop: -12, color: 'var(--mid)' }}>
            Principal Consultant (2021–present) · Solution Architect (2018–2021) · Sr. Consultant (2015–2018)<br />
            Led product design across healthcare, fintech, and enterprise SaaS. Managed a team of 3 designers.
            Built design systems, facilitated workshops, shipped 40+ products.
          </p>

          <p className={styles.p}><strong>Capgemini</strong> — 2011 to 2015</p>
          <p className={styles.p} style={{ marginTop: -12, color: 'var(--mid)' }}>
            Mobile Application Architect<br />
            Designed and architected mobile applications across enterprise clients. Front-end development
            in addition to UX/product design responsibilities.
          </p>

          <div className={styles.divider} />

          {/* Attachment card */}
          <div className={styles.workEntry}>
            <div className={styles.workEntryBody} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ fontSize: 24 }}>📄</div>
              <div>
                <div className={styles.workTitle} style={{ marginBottom: 3 }}>Brad_Carter_Resume.pdf</div>
                <div className={styles.workDesc}>48 KB · Updated March 2025</div>
              </div>
            </div>
            <a href="#" className={styles.workLink}>Download ↓</a>
          </div>

          <div className={styles.sig}>
            — <strong>Brad Carter</strong><br />
            <a href="mailto:brad@bradcarter.design">brad@bradcarter.design</a>
          </div>
        </div>
      </div>
    </div>
  )
}
