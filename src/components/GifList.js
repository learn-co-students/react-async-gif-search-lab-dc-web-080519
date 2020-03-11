import React from 'react'

const GifList = (props) => {


  return (
      <ul className="giflist">
       {(props.gifs === null ?
        (<div className="noGifs">No Gifs Found!</div>) :
         (props.gifs.map(gif => {
         return (
           <li>
           <div className="card" key={gif.title}>
            <div className="card-header">{gif.title}
            </div>
            <img src={gif.images.original.url} alt={gif.title}/>
           </div>
           </li>
         )}
       )))
     }
      </ul>
  )
}

export default GifList
