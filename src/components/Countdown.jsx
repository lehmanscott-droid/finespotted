const pad = (n) => String(n).padStart(2, '0')

// DD : HH : MM : SS with tiny labels underneath.
export default function Countdown({ countdown, className = '' }) {
  const parts = [
    ['Days', countdown.days],
    ['Hrs', countdown.hours],
    ['Min', countdown.minutes],
    ['Sec', countdown.seconds],
  ]
  return (
    <div className={`flex items-start gap-3 sm:gap-5 ${className}`} role="timer" aria-live="off">
      {parts.map(([unit, value], i) => (
        <div key={unit} className="flex items-start gap-3 sm:gap-5">
          <div className="text-center">
            <div className="text-2xl font-medium tabular-nums sm:text-3xl">{pad(value)}</div>
            <div className="label mt-1 text-stone">{unit}</div>
          </div>
          {i < parts.length - 1 && <span className="text-2xl font-light text-stone sm:text-3xl">:</span>}
        </div>
      ))}
    </div>
  )
}
