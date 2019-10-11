import React from 'react'

const GifList = (props) => {

  return (
    <div className="col-sm">
      <ul className="giflist">
       {props.gifs.map(gif => {
         return (
           <li><img src={gif.images.original.url}/></li>
         )
       })}
      </ul>
    </div>
  )
}

export default GifList
