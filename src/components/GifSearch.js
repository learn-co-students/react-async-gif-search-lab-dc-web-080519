import React from 'react'

const GifSearch = (props) => {
  return (
    <div className="col-sm">
      <form onSubmit={props.submitHandler}>
        <label> Search Query:
        <input type="text" onChange={props.updateSearch}/>
        <input type="submit" value="Search GIFS!"/>
        </label>
      </form>
    </div>
  )
}

export default GifSearch
