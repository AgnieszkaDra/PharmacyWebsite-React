import { useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query'

export const useToggleNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(true)

  const isMobile = useMediaQuery('(max-width: 768px)')

  const openNavbar = () => {
    if (isMobile) {
      setNavbarOpen(!navbarOpen)
    } else {
      //
    }
  }

  return { navbarOpen, openNavbar }
}
