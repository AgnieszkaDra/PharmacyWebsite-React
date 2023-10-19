import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';


// library.add(faXmark)

export const Menu = (props) => {
  const {
    className,
    open,
    ...otherProps
  
  } = props

  
  const [navbarOpen, setNavbarOpen] = useState(true);

   const handleToggle = () => {
    alert('on click toggle')
    setNavbarOpen(!navbarOpen);
  }

  // const handleToggle = () => {
  //   setNavbarOpen(!navbarOpen);
  // }
  // const context = React.useContext(NavbarContext);

  return (
    <>
       {/* <nav class='nav'>
                <ul class="nav__menu menu">
                    <li class="menu__item"><a class="link" href="#main">Strona główna</a></li>
                    <li class="menu__item"><a class="link" href="#section--fourth">Kontakt</a></li>
                    <li class="menu__item"><a class="link" href="/">Praca</a></li>
                </ul>
                <button class="nav__button close">
                    <i class="fa-solid fa-xmark nav__button__icon"></i>
                </button>
            </nav> */}
  <nav
      className={`nav ${open ? 'nav__block' : ` `} ${className}`}

    >
      {/* <button onClick={handleToggle} className={classes.hamburger__btn}><GiHamburgerMenu/></button>     */}
        <ul className={`nav__menu menu `}>
            <li className={'menu__item'}><a href="/" className={'link'}>Strona główna</a></li>
            <li className={'menu__item'}><a href="/" className={'link'}>Kontakt</a></li>
            <li className={'menu__item'}><a href="/" className={'link'}>Praca</a></li>
             {/* <FontAwesomeIcon icon={faXmark} className={"nav__button close"} onClick={handleToggle}/> */}
            
        </ul>
    </nav>

    
    </>
  
  )
}

Menu.propTypes = {
  className: PropTypes.string
}

export default Menu
