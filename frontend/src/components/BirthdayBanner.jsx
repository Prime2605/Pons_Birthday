import { useEffect, useRef } from 'react'
import styles from './BirthdayBanner.module.css'

export default function BirthdayBanner() {
  const boxRef = useRef(null)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const colors = ['#F4B8D8','#D4A017','#C2568A','#9B1B30','#FFF8F0','#F5D78E','#fff','#EC93C0']
    for (let i = 0; i < 130; i++) {
      const el = document.createElement('div')
      el.style.cssText = `
        position:absolute;
        left:${Math.random() * 100}%;
        width:${6 + Math.random() * 10}px;
        height:${6 + Math.random() * 10}px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        animation:confFall ${2 + Math.random() * 2.8}s linear ${Math.random() * 2}s forwards;
      `
      box.appendChild(el)
    }
  }, [])

  return (
    <section className={styles.wrap}>
      <div ref={boxRef} className={styles.confetti} />
      <p className={`great-vibes gold ${styles.main}`}>Happy Birthday</p>
      <p className={`playfair italic ${styles.name}`}>Ponsankari — My Thangapulla 🌹</p>
      <p className={`great-vibes pink ${styles.from}`}>from your Prime, with every beat of this heart</p>
      <div className={`badge ${styles.badge}`}>✨ Born April 9, 2007 · 19 Years of Beautiful You ✨</div>
      <p className={`playfair italic pink ${styles.song}`}>
        🎵 <em>Innum konjam neram iruntha dha enna...</em> — AR Rahman 🎵
      </p>
    </section>
  )
}
