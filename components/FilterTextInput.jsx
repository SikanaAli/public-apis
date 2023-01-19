import React from 'react'
import styled from 'styled-components'
import { MdOutlineClear,MdSearch } from "react-icons/md";


function FilterTextInput( {filterText, onFilter, onClear}) {
  return (
        <div className="flex items-center">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MdSearch size={20}/>
                </div>
                <input type="text" id="simple-search" value={filterText} onChange={onFilter} class="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:border-[#515151] dark:bg-[#424242] " placeholder="Filter by name" required/>
            </div>
            <button type="submit" onClick={onClear} class="p-2.5 ml-2 text-sm font-medium dark:text-white text-white bg-wite-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#0891b2] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <MdOutlineClear size={20}/>
                <span class="sr-only">Search</span>
            </button>
        </div>
  )
}

export default FilterTextInput