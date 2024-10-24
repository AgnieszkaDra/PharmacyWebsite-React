import React from 'react'
import useToggleNavbar from '../../../hooks/useToggleNavbar'
import ChocolateHamburger from '../ChocolateHamburger/ChocolateHamburger'
import Menu from '../Menu/Menu'
import { twMerge } from 'tailwind-merge'

const Navigation = () => {
  const { navbarOpen, openNavbar } = useToggleNavbar()

  return (
    <>
      <button
        onClick={openNavbar}
        className={twMerge(
          'hamburger w-10 h-10 text-2xl p-1.5',
          !navbarOpen && 'close'
        )}
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
      />
    </>
  )
}

export default Navigation
