import React from 'react'

import Header from './components/layout/Header/Header/Header'
import Main from './components/layout/Main'
import Footer from './components/Footer/Footer'

export class App extends React.Component {
  render () {
    return (
      <>
        <Header
          className={'header'}
        >
        </Header>
        <Main
          className={'main'}
        >
        </Main>
        <Footer className={'footer'}></Footer>
      </>
    )
  }
}

export default App
