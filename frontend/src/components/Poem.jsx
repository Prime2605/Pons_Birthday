import styles from './Poem.module.css'

export default function Poem() {
  return (
    <section className={`section ${styles.bg}`} style={{ textAlign: 'center' }}>
      <div className="inner">
        <p className="section-lbl">Written Just for You</p>
        <h2 className="section-title">A Poem for Ponsankari ✨</h2>
        <div className={styles.card}>
          <p className="section-lbl" style={{ marginBottom: '22px' }}>English</p>
          <div className={`playfair italic cream ${styles.poem}`}>
            <span>She was born on a day in April,</span>
            <span>When jasmine bloomed and stars went still —</span>
            <span>The world took one long breath and smiled,</span>
            <span>The universe had kept its most beautiful promise.</span>
            <br />
            <span>She beats me and calls it love,</span>
            <span>She scolds me and means it as a hug —</span>
            <span>She comes closer and the whole world pauses,</span>
            <span>She says "me too" and I need nothing else.</span>
            <br />
            <span>Happy Birthday, Thangapulla.</span>
            <span className="gold">You are the best thing that ever happened to me.</span>
          </div>

          <div className={styles.dividerLine} />

          <p className="section-lbl" style={{ marginBottom: '22px' }}>Tamil</p>
          <div className={styles.tamil}>
            <span>உன் சிரிப்பில் என் உலகம் தொடங்குது,</span>
            <span>உன் கோபத்திலும் என் காதல் வலுக்குது —</span>
            <span>நீ பிறந்த நாளில் விண்மீன்கள் ஆடின,</span>
            <span>நீ என் வாழ்வில் வந்ததால் நான் வாழ்கிறேன்.</span>

          </div>
        </div>
      </div>
    </section>
  )
}
