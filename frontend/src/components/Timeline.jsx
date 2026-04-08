import { useEffect, useRef } from 'react'
import { timelineData } from '../data'
import styles from './Timeline.module.css'

export default function Timeline() {
  const itemRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.vis) }),
      { threshold: 0.15 }
    )
    itemRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={`section ${styles.bg}`}>
      <div className="inner">
        <p className="section-lbl">Every Moment Matters</p>
        <h2 className="section-title">The Story of Us 💑</h2>
        <div className={styles.timeline}>
          {timelineData.map((item, i) => (
            <div
              key={i}
              ref={el => (itemRefs.current[i] = el)}
              className={styles.item}
            >
              <div className={styles.dot} />
              <div className={styles.emoji}>{item.emoji}</div>
              <div className={styles.date}>{item.date}</div>
              <div className={`playfair italic ${styles.title}`}>{item.title}</div>
              <div
                className={styles.desc}
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
