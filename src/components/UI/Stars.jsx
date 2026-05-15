import { useMemo } from 'react'

export default function Stars() {
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.5 + 0.1,
    }))
  }, [])

  return (
    <div className="stars" aria-hidden="true">
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            '--duration': `${s.duration}s`,
            '--delay': `${s.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
