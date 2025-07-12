import { useEffect, useState } from 'react'

const FadeScreen = () => {
  const [fadeScreen, setFadeScreen] = useState(false)
  const [fadeTextToBlack, setFadeTextToBlack] = useState(false)
  const [fadeTextFromBlack, setFadeTextFromBlack] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)

  useEffect(() => {
    // Start with black text, then fade to white
    const fromBlackTimer = setTimeout(() => setFadeTextFromBlack(true), 100)
    // Fade in subtitle halfway through main text fade in (main is 1.2s, so halfway is 600ms)
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 100 + 600)
    // Fade text to black and fade out black screen at the same time
    const fadeOutTimer = setTimeout(() => {
      setFadeTextToBlack(true)
      setFadeScreen(true)
    }, 1800)
    return () => {
      clearTimeout(fromBlackTimer)
      clearTimeout(subtitleTimer)
      clearTimeout(fadeOutTimer)
    }
  }, [])

  // Fade in text with opacity, fade color from black to white, then white to black
  let textColor = '#000'
  if (fadeTextFromBlack && !fadeTextToBlack) textColor = '#fff'
  if (fadeTextToBlack) textColor = '#000'

  // Main text position
  const baseMainPosition =
    'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'
  const topLeftMainPosition =
    'fixed left-8 top-8 translate-x-0 translate-y-0 flex flex-col items-start'
  const mainPositionClass = fadeTextToBlack ? topLeftMainPosition : baseMainPosition

  // Subtitle position (independent transition)
  const baseSubtitlePosition =
    'fixed left-1/2 top-[calc(50%+3.5rem)] -translate-x-1/2 flex items-center' // 3.5rem below main text
  const topLeftSubtitlePosition =
    'fixed left-8 top-[calc(2rem+3.5rem)] translate-x-0 flex items-start' // 3.5rem below top-8
  const subtitlePositionClass = fadeTextToBlack ? topLeftSubtitlePosition : baseSubtitlePosition

  return (
    <>
      {/* Black overlay */}
      <div
        className={`
          fixed inset-0 z-50 bg-black
          transition-opacity duration-[1200ms]
          ${fadeScreen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
      />
      {/* Main text */}
      <div
        className={`
          z-60 pointer-events-none
          transition-all duration-[1200ms] ease-in-out
          ${mainPositionClass}
        `}
        style={{
          transition: 'color 1.2s, all 1.2s',
        }}
      >
        <h1
          className="text-[40px] font-bold"
          style={{
            color: textColor,
            transition: 'color 1.2s, all 1.2s',
          }}
        >
          Cleveland Martin IV
        </h1>
      </div>
      {/* Subtitle text */}
      <div
        className={`
          z-60 pointer-events-none
          transition-all duration-[1200ms] ease-in-out
          ${subtitlePositionClass}
        `}
        style={{
          transition: 'color 1.2s, all 1.2s',
        }}
      >
        <span
          className={`
            text-lg
            transition-opacity duration-700
            ${showSubtitle ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            color: textColor,
            transition: 'color 1.2s, opacity 0.7s',
          }}
        >
          Built With Copilot
        </span>
      </div>
    </>
  )
}

export default FadeScreen