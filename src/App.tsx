import { useEffect, useState } from 'react'
import './App.css'
import ContactCard from './components/ContactCard'
import FadeOutMotion from './components/FadeOutMotion'
import headshot from './assets/headshot.jpeg'

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 600);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-white"
      style={{ paddingTop: isSmallScreen ? '5.5rem' : '7rem' }} // 18*0.25rem and 34*0.25rem
    >
      <FadeOutMotion isSmallScreen={isSmallScreen} />
      <ContactCard isSmallScreen={isSmallScreen} imageSrc={headshot}/>
    </div>
  )
}

export default App
