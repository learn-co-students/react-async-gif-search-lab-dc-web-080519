import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
const BASEURL = 'http://api.giphy.com/v1/gifs/search?q='
const APIKEY = '&api_key=dc6zaTOxFJmzC&rating=g'

class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  searchURL = (query) => {
    const formattedQuery = query.replace(/\s+/g, '-').toLowerCase();
    return `${BASEURL}${formattedQuery}${APIKEY}`
  }

  fetchGifs = (query) => {
    const fetchURL = this.searchURL(query)
    fetch(fetchURL)
    .then(r => r.json())
    .then(obj => {
      const topGifs = obj.data.slice(0, 3)
      const gifURLs = topGifs.map(gif => gif.images.original.url)
      this.setState({gifs: gifURLs})
    })
  }

  render () {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer;