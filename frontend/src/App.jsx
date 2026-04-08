import Particles       from './components/Particles'
import Countdown       from './components/Countdown'
import BirthdayBanner  from './components/BirthdayBanner'
import BirthdayCake    from './components/BirthdayCake'
import Timeline        from './components/Timeline'
import LoveLetter      from './components/LoveLetter'
import MaduraiNight    from './components/MaduraiNight'
import Universe        from './components/Universe'
import Gallery         from './components/Gallery'
import Poem            from './components/Poem'
import ReplySection    from './components/ReplySection'

function Divider({ icon }) {
  return (
    <div className="divider">
      <span>{icon}</span>
    </div>
  )
}

function HowWeMet() {
  return (
    <section className="section" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(255,214,236,.10) 0%, transparent 55%), radial-gradient(ellipse at center, var(--dark3) 0%, var(--dark) 100%)' }}>
      <div className="inner">
        <p className="section-lbl">The Beginning</p>
        <h2 className="section-title">How It All Started 😂💕</h2>
        <div className="card-glass" style={{ position: 'relative' }}>
          <div style={{ position:'absolute',top:'-35px',left:'14px',fontFamily:"'Playfair Display',serif",fontSize:'13rem',color:'rgba(255,179,217,.08)',lineHeight:1,pointerEvents:'none' }}>"</div>
          <p className="playfair italic cream" style={{ fontSize:'1.08rem', lineHeight:2, position:'relative', zIndex:1 }}>
            It started with a reel. Just a silly Instagram reel — a mother haggling for 10 sarees at ₹1000.
            She liked it. And I, having watched my own mom do the exact same thing the very night before,
            saw her like and did the most natural thing in the world:
            <br /><br />
            <span style={{ color:'var(--pink-300)', fontSize:'1.22em' }}>— "Same situation ah?"</span>
            <br /><br />
            That one reply. That one laugh. That moment of shared life — became the first thread of something
            neither of us fully understood yet. The universe has such a funny way of beginning the most
            beautiful stories. It wasn&apos;t grand. It was just us, laughing at the same thing at the same time,
            as if we were always meant to.
          </p>
        </div>
      </div>
    </section>
  )
}

function Promise() {
  return (
    <section className="section" style={{ background:'radial-gradient(ellipse at 50% 50%, rgba(255,214,236,.10) 0%, transparent 60%), linear-gradient(180deg,var(--dark2) 0%,var(--dark) 100%)', textAlign:'center' }}>
      <div className="inner">
        <p className="section-lbl">Our Forever</p>
        <h2 className="section-title">The Promise 💍</h2>
        <span style={{ fontSize:'5rem', display:'block', animation:'float 3s ease-in-out infinite', marginBottom:'24px' }}>💍</span>
        <p className="great-vibes" style={{ fontSize:'clamp(2rem,5vw,3rem)', margin:'0 0 24px', color:'var(--pink-300)', animation:'pinkTextGlow 3s ease-in-out infinite' }}>
          Whatever comes — we face it together.
        </p>
        <p className="playfair italic" style={{ fontSize:'1.08rem', maxWidth:'640px', margin:'0 auto', lineHeight:2, color:'var(--pink-100)' }}>
          From "Same situation ah?" to that quiet night in Madurai — every step has been worth it
          because it brought me closer to you. I don&apos;t know what tomorrow holds, Thangapulla.
          But I know this: as long as it has you in it — I am ready for all of it. As one. Always.
        </p>
        <div className="badge" style={{ marginTop:'32px', color:'var(--pink-200)' }}>🤝 Prime &amp; Ponsankari · Forever 🤝</div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Particles />
      <Countdown />
      <BirthdayBanner />
      <Divider icon="🎂" />
      <BirthdayCake />
      <Divider icon="🥀" />
      <Timeline />
      <Divider icon="🌸" />
      <HowWeMet />
      <Divider icon="💌" />
      <LoveLetter />
      <Divider icon="🌙" />
      <MaduraiNight />
      <Divider icon="💫" />
      <Universe />
      <Divider icon="📸" />
      <Gallery />
      <Divider icon="💍" />
      <Promise />
      <Divider icon="🎵" />
      <Poem />
      <Divider icon="💬" />
      <ReplySection />

      <footer style={{
        position:'relative', zIndex:2, padding:'40px 24px', textAlign:'center',
        background:'var(--dark)', borderTop:'1px solid rgba(244,184,216,.12)',
      }}>
        <div className="great-vibes" style={{ fontSize:'2rem', marginBottom:'8px', color:'var(--pink-300)', animation:'pinkTextGlow 4s ease-in-out infinite' }}>
          Made with love, by Prime — only for Pons 🌹
        </div>
        <p style={{ fontSize:'.76rem', opacity:.38, letterSpacing:'1px' }}>
          GCE Erode · ECE · 2nd Year · April 9, 2026
        </p>
      </footer>
    </>
  )
}
