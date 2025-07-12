import { useEffect, useState } from 'react'

const FadeScreenAlt = () => {
  const [showMainText, setShowMainText] = useState(false)
  const [transitionsDone, setTransitionsDone] = useState(false)
  const [hideBg, setHideBg] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const mainTimer = setTimeout(() => setShowMainText(true), 800)
    return () => {
      clearTimeout(mainTimer)
    }
  }, [])

  useEffect(() => {
    if (showMainText) {
      const doneTimer = setTimeout(() => {
        setTransitionsDone(true)
        setHideBg(true)
      }, 800)
      return () => clearTimeout(doneTimer)
    }
  }, [showMainText])

  // Responsive check for small screens
  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 600)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const textColor = transitionsDone ? 'black' : 'white'
  const bgColor = hideBg ? 'white' : 'black'

  const containerStyle: React.CSSProperties = transitionsDone
    ? {
        position: 'fixed',
        zIndex: 60,
        left: 32,
        top: 32,
        transform: 'translate(0, 0)',
        transition: 'left 1s cubic-bezier(.4,1,.4,1), top 1s cubic-bezier(.4,1,.4,1), transform 1s cubic-bezier(.4,1,.4,1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        pointerEvents: 'none',
        width: 'auto',
      }
    : {
        position: 'fixed',
        zIndex: 60,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'left 1s cubic-bezier(.4,1,.4,1), top 1s cubic-bezier(.4,1,.4,1), transform 1s cubic-bezier(.4,1,.4,1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        width: '100vw',
      }

  // Adjust font size for small screens
  const mainFontSize = isSmallScreen
    ? 'clamp(16px, 7vw, 28px)'
    : 'clamp(20px, 8vw, 40px)'

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          background: bgColor,
          zIndex: 50,
          opacity: 1,
          transition: 'background 0.8s, opacity 0.8s',
          pointerEvents: hideBg ? 'none' : 'auto',
        }}
      />
      <div style={containerStyle}>
        <div>
          <span
            style={{
              fontSize: mainFontSize,
              fontWeight: 'bold',
              color: textColor,
              maxWidth: '90vw',
              overflowWrap: 'break-word',
              textAlign: transitionsDone ? 'left' : 'center',
              lineHeight: 1.1,
              display: 'block',
              opacity: showMainText ? 1 : 0,
              transition: 'opacity 0.8s, color 0.8s, text-align 1s, font-size 0.3s',
            }}
          >
            Cleveland Martin IV
          </span>
        </div>
        {transitionsDone && (
          <div
            style={{
              paddingLeft: '0.3vw',
              fontSize: '16px',
              color: textColor,
              textAlign: 'left',
              marginTop: '0.5em',
            }}
          >
            Built with Copilot
          </div>
        )}
      </div>
    </div>
  )
}

export default FadeScreenAlt