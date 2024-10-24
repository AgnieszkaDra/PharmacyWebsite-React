import { useState, useEffect } from 'react'

const useToggleNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState('')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const openNavbar = () => {
    if (!isMobile) {
      return
    }
    setNavbarOpen(navbarOpen => !navbarOpen)
  }

  return { navbarOpen, openNavbar }
}

export default useToggleNavbar
