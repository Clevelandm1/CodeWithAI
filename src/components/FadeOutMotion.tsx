import { motion } from "motion/react"

type FadeOutMotionProps = {
  isSmallScreen: boolean
}

const FadeOutMotion = ({ isSmallScreen }: FadeOutMotionProps) => {
  const textStyle = isSmallScreen
    ? {
        fontSize: 'clamp(16px, 7vw, 28px)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: '90vw',
        fontWeight: 'bold',
        lineHeight: 1.1,
        zIndex: 10000,
        textAlign: 'left',
        pointerEvents: 'none',
      }
    : {
        fontSize: 'clamp(20px, 8vw, 40px)',
        maxWidth: '90vw',
        fontWeight: 'bold',
        lineHeight: 1.1,
        zIndex: 10000,
        textAlign: 'left',
        pointerEvents: 'none',
      };

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          background: 'black',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{
          left: '50%',
          top: '50%',
          x: '-50%',
          y: '-50%',
          color: '#fff',
          opacity: 0,
          position: 'fixed',
        }}
        animate={{
          left: 32,
          top: 32,
          x: 0,
          y: 0,
          color: '#000',
          opacity: 1,
          position: 'fixed',
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.8 },
          left: { duration: 0.8, delay: 2.5 },
          top: { duration: 0.8, delay: 2.5 },
          x: { duration: 0.8, delay: 2.5 },
          y: { duration: 0.8, delay: 2.5 },
          color: { duration: 1, delay: 2.5 },
        }}
        // @ts-ignore
        style={textStyle}
      >
        Cleveland Martin IV
      </motion.div>
      <motion.div
        initial={{
          left: '50%',
          top: '53%',
          x: '-50%',
          y: '-50%',
          color: '#fff',
          opacity: 0,
          position: 'fixed',
        }}
        animate={{
          left: 32,
          top: isSmallScreen ? 53 : 68,
          x: '2.5%',
          y: 0,
          color: '#999', // <-- change this from '#000' to '#666'
          opacity: 1,
          position: 'fixed',
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1.2 },
          left: { duration: 0.8, delay: 2.5 },
          top: { duration: 0.8, delay: 2.5 },
          x: { duration: 0.8, delay: 2.5 },
          y: { duration: 0.8, delay: 2.5 },
          color: { duration: 1, delay: 2.5 },
        }}
        // @ts-ignore
        style={{
          ...textStyle,
          fontSize: isSmallScreen
            ? 'clamp(12px, 4vw, 14px)'
            : 'clamp(14px, 3vw, 18px)',
          fontWeight: 'normal',
          fontStyle: 'italic',
          marginTop: '0.63em',
          color: '#999', // medium gray
          overflow: 'visible',
        }}
      >
        Built with Copilot
      </motion.div>
    </>
  )
}

export default FadeOutMotion