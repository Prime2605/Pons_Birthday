import { useEffect, useRef } from 'react'
import { universeData } from '../data'
import styles from './Universe.module.css'

export default function Universe() {
  const cardRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.vis) }),
      { threshold: 0.1 }
    )
    cardRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={`section ${styles.bg}`}>
      <div className="inner">
        <p className="section-lbl">Everything That Makes You, You</p>
        <h2 className="section-title">My Favourite Things About You 🌸</h2>
        <div className={styles.grid}>
          {universeData.map((u, i) => (
            <div
              key={i}
              ref={el => (cardRefs.current[i] = el)}
              className={styles.card}
            >
              <div className={styles.icon}>{u.icon}</div>
              <div className={`playfair italic ${styles.label}`}>{u.label}</div>
              <div className={styles.val}>{u.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
