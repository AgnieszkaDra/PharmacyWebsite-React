import React from 'react'

import FullPageLoader from './components/FullPageLoader'
import Typography from './components/Typography/Typography'
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Section from './components/Section/Section'
import SectionFirst from './components/Sections/SectionFirst/SectionFirst'
import SectionSecond from './components/Sections/SectionSecond/SectionSecond'
import SectionThird from './components/Sections/SectionThird/SectionThird'
import SectionFourth from './components/Sections/SectionFourth/SectionFourth'
import Footer from './components/Footer/Footer'


export class App extends React.Component {

  render() {

    return (
      <>
        <Header
          id={'header'}
          className={'container flex'}
        >
        </Header>
        <Main
          className={'container'}
        >
          <SectionFirst
            className={'section section--first'}
          >
          </SectionFirst>
          <SectionSecond
            className={'section section--second'}
          >
          </SectionSecond>

          <Section
            className={'section section--third'}
          >

          </Section>
          <Section
            className={'section section--fourth'}
          >
            <SectionThird
            >

            </SectionThird>

          </Section>
          <SectionFourth
            className={'section--fourth'}
          >

          </SectionFourth>
        </Main>
        <Footer></Footer>
      </>
    )
  }
}

export default App
