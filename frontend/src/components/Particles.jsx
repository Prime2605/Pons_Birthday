import { useEffect, useRef } from 'react'

export default function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    container.innerHTML = ''

    const hearts = ['💗','💕','❤️','🌹','💓','💖','🌷']

    // Rose petals — gradient between 3 pink variations for richness
    const petalGrads = [
      'radial-gradient(ellipse,#FFD6EC,#EC93C0)',
      'radial-gradient(ellipse,#FFB3D9,#C2568A)',
      'radial-gradient(ellipse,#F4B8D8,#D4679E)',
      'radial-gradient(ellipse,#FFF0F7,#F4B8D8)',
    ]
    for (let i = 0; i < 26; i++) {
      const el = document.createElement('div')
      el.style.cssText = `
        position:absolute;
        width:${11 + Math.random() * 15}px;
        height:${11 + Math.random() * 15}px;
        background:${petalGrads[Math.floor(Math.random()*petalGrads.length)]};
        border-radius:50% 0 50% 0;
        left:${Math.random() * 100}%;
        top:${Math.random() * -20}%;
        --drift:${(Math.random() - 0.5) * 150}px;
        animation:petalFall ${6 + Math.random() * 10}s linear ${Math.random() * 12}s infinite;
        opacity:${0.6 + Math.random() * 0.4}; pointer-events:none;
      `
      container.appendChild(el)
    }

    // Floating hearts
    for (let i = 0; i < 16; i++) {
      const el = document.createElement('div')
      el.textContent = hearts[Math.floor(Math.random() * hearts.length)]
      el.style.cssText = `
        position:absolute;
        font-size:${14 + Math.random() * 18}px;
        left:${Math.random() * 96}%;
        bottom:-5%;
        animation:heartRise ${8 + Math.random() * 10}s ease-in ${Math.random() * 12}s infinite;
        pointer-events:none;
      `
      container.appendChild(el)
    }

    // Cupid arrows
    for (let i = 0; i < 5; i++) {
      const el = document.createElement('div')
      el.textContent = '💘'
      el.style.cssText = `
        position:absolute;
        font-size:24px;
        left:${10 + Math.random() * 80}%;
        top:${10 + Math.random() * 75}%;
        animation:arrowFly ${5 + Math.random() * 5}s ease-in-out ${Math.random() * 7}s infinite;
        pointer-events:none;
      `
      container.appendChild(el)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed', inset: 0,
        pointerEvents: 'none', zIndex: 1, overflow: 'hidden',
      }}
    />
  )
}
