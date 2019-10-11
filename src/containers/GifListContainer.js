import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {

  constructor() {
    super()

    this.state = {
      gifs: [],
      searchTerm: ""
    }
  }

  returnUrl = () => {
    return `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log(this.state.searchTerm)
    fetch(this.returnUrl())
    .then(response => response.json())
    .then(gifsArray => {
      if(gifsArray.message || gifsArray.data.length === 0) {
        this.setState({
          gifs: null
        })
      }
      else{
      this.setState({
        gifs: gifsArray.data.slice(0,3)
      }, () => console.log(this.state.gifs))
    }
    })
  }

  updateSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => console.log(this.state.searchTerm))
  }

  render() {
    return (

        <div className="container">
          <div className="col-6">
          <GifList gifs={this.state.gifs}/>
          </div>
          <GifSearch submitHandler={this.submitHandler} updateSearch={this.updateSearchTerm} />
        </div>


    )
  }

}
