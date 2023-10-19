import React from 'react'

import FullPageLoader from './components/FullPageLoader'
import Typography from './components/Typography/Typography'
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

import SectionFirst from './components/Sections/SectionFirst/SectionFirst'
import SectionSecond from './components/Sections/SectionSecond/SectionSecond'
import SectionThird from './components/Sections/SectionThird/SectionThird'
import SectionFourth from './components/Sections/SectionFourth/SectionFourth'
import Footer from './components/Footer/Footer'
import drug from './images/leki.webp'


export class App extends React.Component {

  render() {

    return (
      <>
        <Header
          id={'header'}
          className={'header'}
        >
        </Header>
        <Main
          className={'main'}
        >
          <SectionFirst
            className={'section section--first'}
            image = {drug}
          >
          </SectionFirst>
          <SectionSecond
            className={'section section--second'}
          >
          </SectionSecond>

          <SectionThird
            className={'section section--third'}
          >

          </SectionThird>
      
          <SectionFourth
            className={'section--fourth'}
          >

          </SectionFourth>
        </Main>
        <Footer className={'footer'}></Footer>
      </>
    )
  }
}

export default App
