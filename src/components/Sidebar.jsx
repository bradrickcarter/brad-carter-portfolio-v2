import { useState } from 'react'
import { sidebarMailboxes, sidebarFolders } from '../data'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Inbox')

  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <div className={styles.label}>Mailboxes</div>
        {sidebarMailboxes.map(({ icon, label, badge }) => (
          <div
            key={label}
            className={`${styles.item} ${activeItem === label ? styles.active : ''}`}
            onClick={() => setActiveItem(label)}
          >
            <span className={styles.icon}>{icon}</span>
            {label}
            {badge && <span className={styles.badge}>{badge}</span>}
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <div className={styles.label}>On My Mac</div>
        {sidebarFolders.map(({ icon, label }) => (
          <div
            key={label}
            className={`${styles.item} ${activeItem === label ? styles.active : ''}`}
            onClick={() => setActiveItem(label)}
          >
            <span className={styles.icon}>{icon}</span>
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
