/*
 * Shows one half of a side-by-side product photo in a 3:4 frame without
 * needing separate image files. The image is drawn at 200% width and slid so
 * only the chosen half is visible. position: 'left' | 'right' | 'full'.
 */
export default function CropImage({ image, className = '', eager = false }) {
  const loading = eager ? 'eager' : 'lazy'

  if (image.position === 'full') {
    return (
      <div className={`aspect-[3/4] overflow-hidden bg-white ${className}`}>
        <img src={image.src} alt={image.alt} loading={loading} className="h-full w-full object-cover" />
      </div>
    )
  }

  return (
    <div className={`aspect-[3/4] overflow-hidden bg-white ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        loading={loading}
        className={`h-full w-[200%] max-w-none object-cover ${image.position === 'right' ? '-translate-x-1/2' : ''}`}
      />
    </div>
  )
}
