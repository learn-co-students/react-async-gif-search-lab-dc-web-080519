import React from 'react'

const GifList = (props) => {
  return(
    <div>
      {props.gifs.map(url => <div><img src={url} /></div>)}
    </div>
  )
}

export default GifList