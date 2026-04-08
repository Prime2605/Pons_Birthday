import { useState, useEffect } from 'react'
import { galleryData } from '../data'
import styles from './Gallery.module.css'

// Build proxy URL through Flask backend
const photoUrl = (id) => `/api/photo/${id}`
const previewUrl = (id) => `https://drive.google.com/file/d/${id}/preview`

function GalleryItem({ item, onOpen }) {
  const [mode, setMode] = useState('img') // 'img' | 'iframe' | 'link'
  const src = photoUrl(item.id)

  return (
    <div className={styles.item} onClick={() => onOpen(item)}>
      {mode === 'img' && (
        <img
          src={src}
          alt={item.caption}
          loading="lazy"
          onError={() => setMode('iframe')}
        />
      )}
      {mode === 'iframe' && (
        <iframe
          src={previewUrl(item.id)}
          title={item.caption}
          allow="autoplay"
          frameBorder="0"
          onError={() => setMode('link')}
        />
      )}
      {mode === 'link' && (
        <div className={styles.fallback}>
          <span>📸</span>
          <span>{item.caption}</span>
          <a
            href={`https://drive.google.com/file/d/${item.id}/view`}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            Open in Drive ↗
          </a>
        </div>
      )}
      <div className={styles.overlay}>
        <span className={`playfair italic ${styles.caption}`}>{item.caption}</span>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [lb, setLb] = useState(null) // { item }

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLb(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <section className={`section ${styles.bg}`}>
      <div className="inner">
        <p className="section-lbl">Our Favourite Moments</p>
        <h2 className="section-title">Gallery of You 🎞️</h2>
        <p className={`playfair italic pink ${styles.sub}`}>
          Every frame of you is a painting the world doesn&apos;t deserve.
        </p>
        <div className={styles.grid}>
          {galleryData.map((item, i) => (
            <GalleryItem key={i} item={item} onOpen={setLb} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lb && (
        <div className={styles.lbWrap} onClick={() => setLb(null)}>
          <button className={styles.lbClose} onClick={() => setLb(null)}>✕</button>
          <div className={styles.lbInner} onClick={e => e.stopPropagation()}>
            <img
              src={photoUrl(lb.id)}
              alt={lb.caption}
              className={styles.lbImg}
              onError={e => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <iframe
              src={previewUrl(lb.id)}
              title={lb.caption}
              allow="autoplay"
              frameBorder="0"
              className={styles.lbFrame}
              style={{ display: 'none' }}
            />
          </div>
          <p className={`great-vibes gold ${styles.lbCap}`}>{lb.caption}</p>
        </div>
      )}
    </section>
  )
}
