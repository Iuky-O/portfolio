import { useMemo } from 'react'

const COLORS = [
  '#FFB7D5', '#FF85B7', '#E879A8', '#FF6FA4',
  '#FFD6E7', '#F5A0C5', '#FF9EC4', '#FFCCE0',
  '#D4639E', '#FFA0C5',
]

const SHAPES = [
  '80% 20% 80% 20%',
  '50% 0 50% 0',
  '60% 40% 60% 40% / 40% 60% 40% 60%',
]

export default function Petals() {
  const petals = useMemo(() => (
    Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * 110 - 5,
      size: Math.random() * 12 + 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      duration: Math.random() * 14 + 10,
      delay: -(Math.random() * 20),
      rotation: Math.random() * 360,
      sway: (Math.random() - 0.5) * 120,
      opacity: Math.random() * 0.4 + 0.15,
    }))
  ), [])

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map(p => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            background: p.color,
            borderRadius: p.shape,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
            '--rot': `${p.rotation}deg`,
            '--sway': `${p.sway}px`,
            '--opacity': p.opacity,
          }}
        />
      ))}
    </div>
  )
}
