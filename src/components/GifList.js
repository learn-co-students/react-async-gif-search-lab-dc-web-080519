import React from 'react'



class GifList extends React.Component {

  render(){
    return(
      <div className='indiv-gif-div'>
        <img src={this.props.gifArr.images.original.url} alt=''/>
      </div>
    )
  }
}

export default GifList
