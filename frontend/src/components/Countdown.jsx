import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'

const TARGET = new Date('2026-04-09T00:00:00+05:30').getTime()

function pad(n) { return String(n).padStart(2, '0') }

export default function Countdown() {
  const [time, setTime] = useState({ d:0, h:0, m:0, s:0, done:false })

  useEffect(() => {
    const tick = () => {
      const diff = TARGET - Date.now()
      if (diff <= 0) { setTime(t => ({ ...t, done: true })); return }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
        done: false,
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className={styles.wrap}>
      <p className={`great-vibes gold ${styles.sub}`}>A Love Letter in the Form of a Webpage</p>
      <h1 className={styles.title}>
        Counting Down to<br />
        <span className="gold italic">Her Most Beautiful Day</span>
      </h1>
      <div className={styles.heartPulse}>💕</div>

      {time.done ? (
        <div className={`badge ${styles.bdayBadge}`}>🎉 It is Her Birthday! 🎉</div>
      ) : (
        <div className={styles.timerRow}>
          {[['d','Days'],['h','Hours'],['m','Minutes'],['s','Seconds']].map(([k,lbl])=>(
            <div key={k} className={styles.block}>
              <span className={styles.num}>{pad(time[k])}</span>
              <span className={styles.lbl}>{lbl}</span>
            </div>
          ))}
        </div>
      )}

      <p className={`playfair italic pink ${styles.msg}`}>
        Every second that passes is one step closer to the day<br />
        the universe stopped and said —{' '}
        <em>&ldquo;She was born today.&rdquo;</em>
      </p>
      <div className={styles.scrollHint}>↓ Scroll</div>
    </section>
  )
}
