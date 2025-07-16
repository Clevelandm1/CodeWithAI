import React from 'react'
import LinkedInIcon from '../assets/linkedin.svg'
import { motion } from 'motion/react'

type ContactCardProps = {
  isSmallScreen?: boolean
  imageSrc?: string
}

const ContactCard: React.FC<ContactCardProps> = ({ isSmallScreen, imageSrc }) => {
  // Container dimensions
  const padding = isSmallScreen ? 12 : 16
  const minHeight = isSmallScreen ? 320 : 160 // Much bigger height for small screens

  const gap = isSmallScreen ? 2 : 48
  // Make boxes even bigger only on small screens
  const squareSize = isSmallScreen
    ? "85vw" // Use even more available width for small screens
    : "35vw"   // half for large screens

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: 'center',
        //background: '#f3f3f3',
        padding: `${padding}px ${isSmallScreen ? 16 : 32}px`,
        minWidth: isSmallScreen ? '85vw' : '65vw',
        minHeight: minHeight,
        justifyContent: 'center',
        gap: gap,
      }}
    >
      {/* Large square on the left (or top on small screens) */}
      <img
        src={imageSrc}
        alt="Headshot"
        style={{
          background: '#fff',
          width: squareSize,
          height: squareSize,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      />
      {/* Large square for text on the right (or bottom on small screens) */}
      <div
        style={{
          background: '#fff',
          width: isSmallScreen ? '93vw' : squareSize,
          minHeight: squareSize,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: isSmallScreen ? '18px' : '18px',
          color: '#333',
          fontSize: isSmallScreen ? '1.5rem' : '2rem',
          overflowY: 'auto',
          overflowX: 'hidden', // Prevent horizontal/side scrolling
          boxSizing: 'border-box',
        }}
      >
        {/* Title placeholder */}
        <div style={{ fontWeight: 'bold', fontSize: isSmallScreen ? '1.8rem' : '2.5rem' }}>
          Who is Cleveland...
        </div>
        {/* Summary placeholder */}
        <div style={{ fontSize: isSmallScreen ? '1.1rem' : '1.7rem', color: '#616161' }}>
          Summary placeholder: This is a short summary about you. You can add a brief introduction or 
          description here. Ill talk for about this long. This is the size of the summary, and this is the number
          of words ill use.
        </div>
        {/* Links placeholder */}
        <a
          href="https://www.linkedin.com/in/clevelandmartin/"
          style={{
            marginBottom: '0.5em',
            marginTop: '0.5em',
            color: '#0077b5',
            fontSize: isSmallScreen ? '1.4rem' : '1.7rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
            textDecoration: 'none',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={LinkedInIcon}
            alt="LinkedIn"
            style={{
              width: isSmallScreen ? '1.5em' : '2em',
              height: isSmallScreen ? '1.5em' : '2em',
              verticalAlign: 'middle',
              filter: 'invert(27%) sepia(99%) saturate(749%) hue-rotate(181deg) brightness(93%) contrast(101%)',
            }}
          />
        </a>
        <div style={{ marginBottom: '0.5em', fontSize: isSmallScreen ? '1.4rem' : '1.7rem', textAlign: 'center', width: '100%', color: '#777' }}>
          (770) 318-0968<br />
          clevelandmartiniv@gmail.com
          <span style={{ display: 'block', marginTop: '0.5em', fontSize: isSmallScreen ? '1.3rem' : '1.7rem' }}>📍 Buford, GA</span>
        </div>
      </div>
    </div>
  )
}

export default ContactCard