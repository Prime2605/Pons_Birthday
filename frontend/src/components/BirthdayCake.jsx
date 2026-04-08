import { useState, useRef } from 'react'
import styles from './BirthdayCake.module.css'

const TOTAL_CANDLES = 19  // She turns 19

export default function BirthdayCake() {
  const [lit, setLit]         = useState(Array(TOTAL_CANDLES).fill(true))
  const [blowing, setBlowing] = useState(false)
  const [blown, setBlown]     = useState(false)
  const [sparks, setSparks]   = useState([])
  const sparkId               = useRef(0)

  const allOut = lit.every(v => !v)

  function addSparks(count = 12) {
    const newSparks = Array.from({ length: count }, () => ({
      id: sparkId.current++,
      x: 30 + Math.random() * 40,  // % across cake top
      color: ['#FFD6EC','#F4B8D8','#FFF0F7','#FFB3D9','#D4A017'][Math.floor(Math.random()*5)],
      angle: Math.random() * 360,
      speed: 0.6 + Math.random() * 0.8,
    }))
    setSparks(prev => [...prev, ...newSparks])
    setTimeout(() => {
      setSparks(prev => prev.filter(s => !newSparks.find(n => n.id === s.id)))
    }, 1000)
  }

  function blowAll() {
    if (allOut) return
    setBlowing(true)
    addSparks(30)

    // Extinguish candles one by one rapidly
    let delay = 0
    const newLit = [...lit]
    const order = [...Array(TOTAL_CANDLES).keys()].sort(() => Math.random() - 0.5)
    order.forEach((idx) => {
      if (!newLit[idx]) return
      delay += 60 + Math.random() * 80
      setTimeout(() => {
        setLit(prev => {
          const next = [...prev]
          next[idx] = false
          return next
        })
        addSparks(4)
      }, delay)
    })

    setTimeout(() => {
      setBlowing(false)
      setBlown(true)
    }, delay + 400)
  }

  function relight() {
    setLit(Array(TOTAL_CANDLES).fill(true))
    setBlown(false)
    setSparks([])
  }

  return (
    <section className={`section ${styles.bg}`}>
      <div className="inner" style={{ textAlign: 'center' }}>
        <p className="section-lbl">Make a Wish ✨</p>
        <h2 className="section-title">Blow Out the Candles 🎂</h2>

        <div className={styles.scene}>
          {/* Spark particles */}
          {sparks.map(s => (
            <div
              key={s.id}
              className={styles.spark}
              style={{
                left: `${s.x}%`,
                background: s.color,
                '--angle': `${s.angle}deg`,
                '--speed': `${s.speed}s`,
              }}
            />
          ))}

          {/* Candles row */}
          <div className={styles.candleRow}>
            {lit.map((isLit, i) => (
              <div key={i} className={styles.candleWrap}>
                {/* Flame */}
                <div className={`${styles.flame} ${isLit ? styles.flameOn : styles.flameOff}`}>
                  <div className={styles.flameOuter} />
                  <div className={styles.flameInner} />
                  {isLit && <div className={styles.flameGlow} />}
                </div>
                {/* Smoke after blowing */}
                {!isLit && <div className={styles.smoke} />}
                {/* Candle body */}
                <div
                  className={styles.candle}
                  style={{ background: `hsl(${(i * 19) % 360},70%,75%)` }}
                />
              </div>
            ))}
          </div>

          {/* Cake body */}
          <div className={styles.cake}>
            <div className={styles.tier1}>
              <div className={styles.frosting1} />
              <div className={styles.decoration}>
                <span>🌹</span><span>💕</span><span>🌸</span><span>💕</span><span>🌹</span>
              </div>
            </div>
            <div className={styles.tier2}>
              <div className={styles.frosting2} />
              <div className={styles.writing}>Happy Birthday Pons 🎂</div>
            </div>
            <div className={styles.plate} />
          </div>
        </div>

        {/* Status text */}
        <div className={styles.statusArea}>
          {!allOut && !blowing && (
            <p className={`playfair italic ${styles.hint}`}>
              {TOTAL_CANDLES} candles for your {TOTAL_CANDLES} beautiful years 🕯️
            </p>
          )}
          {blowing && (
            <p className={`playfair italic ${styles.blowText}`}>
              💨 Blowing… make a wish, Thangapulla!
            </p>
          )}
          {blown && allOut && (
            <div className={styles.wishMsg}>
              <p className={`great-vibes ${styles.wishTitle}`}>Happy Birthday! 🌹</p>
              <p className={`playfair italic ${styles.wishLine}`}>
                Whatever you wished for, I hope it comes true.<br />
                And if it didn&apos;t — you still have me. 💕
              </p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className={styles.btnRow}>
          {!allOut && (
            <button
              className={styles.blowBtn}
              onClick={blowAll}
              disabled={blowing}
            >
              {blowing ? '💨 Blowing...' : '💨 Blow Out All Candles!'}
            </button>
          )}
          {allOut && (
            <button className={styles.relightBtn} onClick={relight}>
              🕯️ Relight Candles
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
