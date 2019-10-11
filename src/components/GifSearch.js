import React from 'react'

class GifSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  updateQuery = (e) => {
    this.setState({query: e.target.value});
  }

  sendSearch = (e) => {
    e.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render () {
    return(
      <div>
        <form onSubmit={this.sendSearch} onChange={this.updateQuery}>
          <label htmlFor='field'>Gimme that good good gif </label>
          <input type='text' name='field'></input>
          <input type='submit' value='Search' />
        </form>
      </div>
    )
  }
}

export default GifSearch;