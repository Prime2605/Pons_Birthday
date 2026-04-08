import { useState, useEffect } from 'react'
import styles from './ReplySection.module.css'

export default function ReplySection() {
  const [text, setText] = useState('')
  const [replies, setReplies] = useState([])
  const [toast, setToast] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('/api/replies')
      .then(r => r.json())
      .then(setReplies)
      .catch(() => {})
  }, [])

  const save = async () => {
    if (!text.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/replies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      if (res.ok) {
        const entry = await res.json()
        setReplies(prev => [...prev, entry])
        setText('')
        setToast(true)
        setTimeout(() => setToast(false), 3000)
      }
    } catch {
      alert('Could not save — make sure the backend is running!')
    } finally {
      setLoading(false)
    }
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
          <button className={styles.btn} onClick={save} disabled={loading}>
            {loading ? 'Saving...' : '💌 Save My Reply'}
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
