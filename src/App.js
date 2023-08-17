import React from 'react'

import FullPageLoader from './components/FullPageLoader'
import Typography from './components/Typography/Typography'
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'


export class App extends React.Component {
  state = {
    // global state
    isLoading: false,

  }

  render () {
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
          Header 2
        </Typography>
        <Menu
          className={'nav'}
        >
          Menu
        </Menu>
        <Header
           id={'header'} 
        >
        </Header>
    </div>
    )
  }
}

export default App
