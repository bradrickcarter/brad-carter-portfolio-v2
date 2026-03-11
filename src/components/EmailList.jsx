import { useState } from 'react'
import { emails } from '../data'
import styles from './EmailList.module.css'

export default function EmailList({ activeId, onSelect, sidebarCollapsed, onExpandSidebar }) {
  const [readIds, setReadIds] = useState([])

  function handleSelect(id) {
    setReadIds(prev => [...new Set([...prev, id])])
    onSelect(id)
  }

  return (
    <div className={styles.emailList}>
      <div className={styles.header}>
        {sidebarCollapsed && (
          <button className={styles.expandBtn} onClick={onExpandSidebar} title="Show sidebar">›</button>
        )}
        <span className={styles.title}>INBOX</span>
        <span className={styles.count}>{emails.length} MESSAGES</span>
      </div>
      <div className={styles.body}>
        {emails.map(({ id, colorClass, sender, date, subject, preview }) => {
          const isActive = activeId === id
          const isUnread = !readIds.includes(id)
          return (
            <div
              key={id}
              className={[
                styles.item,
                styles[colorClass],
                isActive ? styles.active : '',
                isUnread ? styles.unread : '',
              ].join(' ')}
              onClick={() => handleSelect(id)}
            >
              <div className={styles.itemTop}>
                <span className={styles.sender}>{sender}</span>
                <span className={styles.date}>{date}</span>
              </div>
              <div className={styles.subject}>{subject}</div>
              <div className={styles.preview}>{preview}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
