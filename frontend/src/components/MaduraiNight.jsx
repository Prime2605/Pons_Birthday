import styles from './MaduraiNight.module.css'

const lines = [
  { text: 'The bus was going to Madurai.', cls: '' },
  { text: 'But our hearts — our hearts were going somewhere else entirely.', cls: '' },
  { text: '', cls: 'br' },
  { text: 'The lights went off.', cls: '' },
  { text: 'And in the dark, I could feel you.', cls: 'pink italic' },
  { text: 'We talked softly — like we were afraid the night would hear us.', cls: '' },
  { text: '', cls: 'br' },
  { text: 'Then something shifted.', cls: '' },
  { text: 'The world grew smaller and smaller — until it was just us.', cls: '' },
  { text: '', cls: 'br' },
  { text: 'You came closer.', cls: 'pink' },
  { text: 'I came closer.', cls: 'pink' },
  { text: 'Our noses touched — like two questions finding one answer.', cls: '' },
  { text: '', cls: 'br' },
  { text: 'We closed our eyes.', cls: '' },
  { text: 'And then — we were one.', cls: 'gold italic', big: true },
  { text: '', cls: 'br' },
  { text: 'Near Karur Bus Stand · March 27, 2026', cls: 'small' },
  { text: 'The night I knew — it will always be you. 💋', cls: 'small' },
]

export default function MaduraiNight() {
  return (
    <section className={`section ${styles.bg}`} style={{ textAlign: 'center' }}>
      <div className="inner">
        <p className="section-lbl">The Most Beautiful Night</p>
        <h2 className="section-title">When the Bus Stood Still 🌙</h2>
        <div className={`card-glass ${styles.card}`}>
          <p className={`gold ${styles.stars}`}>✦ ✦ ✦</p>
          <div className={`playfair italic ${styles.poem}`}>
            {lines.map((l, i) =>
              l.cls === 'br'
                ? <br key={i} />
                : (
                  <span
                    key={i}
                    className={`${styles.line} ${l.cls === 'pink' ? styles.pink : ''} ${l.cls === 'gold italic' ? styles.goldBig : ''} ${l.cls === 'small' ? styles.small : ''} ${l.cls === 'pink italic' ? styles.pinkItalic : ''}`}
                  >
                    {l.text}
                  </span>
                )
            )}
          </div>
          <p className={`gold ${styles.stars}`} style={{ marginTop: '20px' }}>✦ ✦ ✦</p>
        </div>
      </div>
    </section>
  )
}
