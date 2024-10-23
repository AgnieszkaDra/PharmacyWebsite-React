import React from 'react'
import HeaderContainer from './components/layout/Header/HeaderContainer'
import Main from './components/layout/Main'
import { Footer } from './components/layout'
import './output.css'

const App = () => {
  return (
    <>
      <HeaderContainer
        className={'header'}
      >
      </HeaderContainer>
      <Main
        className={'main'}
      >
      </Main>
      <Footer
        className={'footer'}
      >
      </Footer>
    </>
  )
}

export default App
