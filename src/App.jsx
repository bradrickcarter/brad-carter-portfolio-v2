import { useState, useEffect } from 'react'
import TitleBar from './components/TitleBar'
import Toolbar from './components/Toolbar'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import AboutEmail from './components/AboutEmail'
import WorkEmail from './components/WorkEmail'
import ContactEmail from './components/ContactEmail'
import ResumeEmail from './components/ResumeEmail'
import StatusBar from './components/StatusBar'
import styles from './App.module.css'

const EMAIL_VIEWS = {
  about:   <AboutEmail />,
  work:    <WorkEmail />,
  contact: <ContactEmail />,
  resume:  <ResumeEmail />,
}

export default function App() {
  const [activeEmail, setActiveEmail] = useState('work')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [inboxOpen, setInboxOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setSidebarCollapsed(true), 2000)
    return () => clearTimeout(t)
  }, [])

  function handleSelect(id) {
    setActiveEmail(id)
    setInboxOpen(false)
  }

  return (
    <div className={styles.frame}>
      <TitleBar onMenuClick={() => setInboxOpen(v => !v)} />
      <Toolbar />
      <div className={styles.body}>
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(v => !v)} />
        <EmailList
          activeId={activeEmail}
          onSelect={handleSelect}
          sidebarCollapsed={sidebarCollapsed}
          onExpandSidebar={() => setSidebarCollapsed(false)}
          mobileOpen={inboxOpen}
          onMobileClose={() => setInboxOpen(false)}
        />
        <div
          className={styles.detailPane}
          style={{ '--content-max-width': sidebarCollapsed ? 'none' : '660px' }}
        >
          {EMAIL_VIEWS[activeEmail]}
        </div>
      </div>
      <StatusBar />
    </div>
  )
}
