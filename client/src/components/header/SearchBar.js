import React from 'react'
// import JSONDATA from './MOCK_DATA.json'

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search..." />

      {/* happy path - list items from mock data */}
      {/* {JSONDATA.map((val, key) => {
        return (
          <div className="products" key={key}>
            <p>{val.title}</p>
          </div>
        )
      })} */}
    </div>
  )
}

export default SearchBar
