import React from 'react'
import { Header, Main, Footer } from './components/layout'
import './output.css'

const App = () => {
  return (
    <>
      <Header
        className={'header'}
      />
      <Main
        className={'main'}
      />
      <Footer
        className={'footer'}
      />
    </>
  )
}

export default App
