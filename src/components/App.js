import React from 'react'
import NavBar from './NavBar'
import GifSearch from './GifSearch'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      gifArr: [],
      searchText: ""
    }
  }

  changeSearchText = (event) => {
    this.setState({searchText: event.target.value})
  }

  searchSubmit = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchText}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => {
      this.setState({gifArr: data.data})
    })
  }

  render() {
    return (
      <div>
        <NavBar color='black' title="Giphy Search" />
        <GifSearch changeSearchText={this.changeSearchText} searchSubmit={this.searchSubmit}/>
        <GifListContainer gifArr={this.state.gifArr}/>
    </div>
    )
  }
}

export default App
