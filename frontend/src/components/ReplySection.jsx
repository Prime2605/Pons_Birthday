import { useState, useEffect } from 'react'
import styles from './ReplySection.module.css'

const STORAGE_KEY = 'pons_replies'

function loadReplies() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

function saveReply(entry) {
  const replies = loadReplies()
  replies.push(entry)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(replies))
  return entry
}

export default function ReplySection() {
  const [text, setText] = useState('')
  const [replies, setReplies] = useState([])
  const [toast, setToast] = useState(false)

  useEffect(() => {
    setReplies(loadReplies())
  }, [])

  const save = () => {
    if (!text.trim()) return
    const entry = {
      text: text.trim(),
      date: new Date().toLocaleString('en-IN', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit',
      }),
    }
    saveReply(entry)
    setReplies(prev => [...prev, entry])
    setText('')
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <section className={`section ${styles.bg}`} style={{ textAlign: 'center' }}>
      <div className="inner">
        <p className="section-lbl">Your Turn</p>
        <h2 className="section-title">Write Back to Me, Thangapulla 💕</h2>
        <div className={`card-glass ${styles.card}`}>
          <p className={`playfair italic pink ${styles.intro}`}>
            Every word you write here is saved as a memory —<br />
            a treasure I will revisit whenever I miss you. 🌹
          </p>
          <textarea
            className={styles.ta}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Dear Prime... (type your heart here 💕)"
            rows={7}
          />
          <button className={styles.btn} onClick={save}>
            💌 Save My Reply
          </button>

          {replies.length > 0 && (
            <div className={styles.saved}>
              <p className={`great-vibes gold ${styles.savedTitle}`}>
                🌹 Her Replies — A Memory Box
              </p>
              {replies.map((r, i) => (
                <div key={i} className={styles.entry}>
                  <div className={`gold ${styles.entryDate}`}>📅 {r.date}</div>
                  <div className={`playfair italic cream ${styles.entryText}`}>{r.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {toast && (
        <div className={styles.toast}>💕 Saved as a memory forever!</div>
      )}
    </section>
  )
}
