import React from 'react'


class GifSearch extends React.Component {
  render(){
    return(
      <div className='search-bar-div'>
        <input type="text" onChange={this.props.changeSearchText}/>
        <button className='search-btn' onClick={this.props.searchSubmit}>Search</button>
      </div>
    )
  }
}

export default GifSearch
