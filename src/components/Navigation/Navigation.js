import React from 'react'
import { useToggleNavbar } from '../../hooks/useToggleNavbar'

import ChocolateHamburger from '../ChocolateHamburger/ChocolateHamburger'

import Menu from '../Menu/Menu'

export const Navigation = () => {
  const { navbarOpen, openNavbar } = useToggleNavbar()
  // const { Provider: NavbarProvider } = NavbarContext;
  // const [navbarOpen, setNavbarOpen] = useState(false);

  // const handleToggle = () => {
  //   setNavbarOpen(!navbarOpen);
  // }

  return (
    <>
      <button
        onClick={openNavbar}
        className={'hamburger'}
      >
        <ChocolateHamburger
          isNavbarOpen={navbarOpen}
          openFunc={openNavbar}
          span={9}
        />
      </button>
      <Menu
        className={'nav'}
        isNavbarOpen={navbarOpen}
        navbarOpenFunc={openNavbar}
      >
      </Menu>
    </>
  )
}

export default Navigation
