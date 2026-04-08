import styles from './LoveLetter.module.css'

export default function LoveLetter() {
  return (
    <section className={`section ${styles.bg}`}>
      <div className="inner">
        <p className="section-lbl">From the Heart</p>
        <h2 className="section-title">A Letter to Thangapulla 💌</h2>
        <div className={styles.paper}>
          <span className={`${styles.corner} ${styles.tl}`}>✦</span>
          <span className={`${styles.corner} ${styles.tr}`}>✦</span>
          <div className={styles.dateRow}>GCE Erode · April 9, 2026</div>
          <div className={`great-vibes ${styles.salutation}`}>My Dearest Thangapulla,</div>
          <div className={styles.roses}>🌹 🌹 🌹</div>
          <div className={styles.body}>
            <p>Today, the world is nineteen years old — because nineteen years ago, you arrived in it. Nothing has been the same since. I don't know what the universe was doing before you came along, but I'm convinced it was just rehearsing.</p>
            <p>You beat me for everything. You scold me and then look at me with those eyes and I forget what you were even saying. You cuddle close and bite me like I'm made of your favourite vada-with-coconut-chutney — and I'd let you, every single time. Your anger is my poem. Your smile is my answer to everything.</p>
            <p>I look at you — the girl who liked a reel about sarees and accidentally gave me the courage to talk to you. The girl who <em>asked me first</em> to say those three words. The girl who said "me too" and shook my whole world. The girl with the mole on her deep neck that catches the light just right and stops my heart — every time. Every. Single. Time.</p>
            <p>That night in the Madurai bus — when the lights went off and the world went quiet — I didn't plan it. You came closer. I came closer. Our noses touched like two questions finding one answer. We closed our eyes. And in that breathless moment, everything made sense. <em>You made sense.</em> You still do. You always will.</p>
            <p>On this birthday, here is my forever promise: <strong>Whatever comes, we face it together. Always, as one.</strong></p>
            <p>You deserve every rose in every garden, every song AR Rahman has ever written and all the ghee roast in the world. But most of all — you deserve to be loved completely, deeply, every single day. And Thangamailuu — I will happily spend the rest of my life doing exactly that.</p>
          </div>
          <div className={styles.ending}>
            <p className={styles.farewellLine}>Forever and then some,</p>
            <div className={`great-vibes ${styles.sign}`}>Your Prime ❤️</div>
          </div>
          <span className={`${styles.corner} ${styles.bl}`}>✦</span>
          <span className={`${styles.corner} ${styles.br}`}>✦</span>
        </div>
      </div>
    </section>
  )
}
