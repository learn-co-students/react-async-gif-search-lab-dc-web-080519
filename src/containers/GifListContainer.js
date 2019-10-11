import React from 'react'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  render(){

    return (
      <div className='gif-list-container-div'>{this.props.gifArr.map((g) => <GifList gifArr={g} key={g.id} />)}</div>
    )
  }
}

export default GifListContainer
