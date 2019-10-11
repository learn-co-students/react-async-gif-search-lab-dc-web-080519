import React from 'react'

const GifSearch = (props) => {
  return (
    <div className="col-6">
      <form className="form-group" onSubmit={props.submitHandler}>
        <label> Enter a Search Term:</label>
        <input type="text" className="form-control" id="searchQuery" onChange={props.updateSearch}/>
        <input type="submit" onClick={props.submitHandler} type="button" className="btn btn-primary" value="Find GIFS"/>
      </form>
    </div>
  )
}

export default GifSearch
