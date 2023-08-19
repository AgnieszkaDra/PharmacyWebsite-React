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


export class App extends React.Component {
  state = {
    // global state
    isLoading: false,

  }

  render() {
    const { isLoading } = this.state

    return (
      <div>
        <h1>Pharmacy Website</h1>

        {
          isLoading ?
            <FullPageLoader />
            :
            null
        }
        <Typography
          variant={'h2'}
        >
          Header 2
        </Typography>
        <br />
        <Typography
          variant={'h3'}
        >
          Header 3
        </Typography>
        <br />
        <Typography
          variant={'h4'}
        >
          Header 4
        </Typography>
        <Menu
          className={'nav'}
        >
          Menu
        </Menu>
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
      </div>
    )
  }
}

export default App
