import { useState } from 'react'

export const useToggleNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const openNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  return { navbarOpen, openNavbar }
}
