import React from 'react'
import { FaSearch } from "react-icons/fa";
export const SearchItems = ({searchItem,setSearchItem}) => {
  return (
    <div>

            <form onSubmit={(e) => e.preventDefault()} className='searchForm'>
            <label htmlFor="search"><FaSearch/></label>
            <input type="text" id="search" placeholder="Search"
                value={searchItem}
                onChange={(e) => {setSearchItem(e.target.value)}}
            />

          
        </form>

    </div>
  )
}
