"use client";

import { requestToBodyStream } from 'next/dist/server/body-streams';
import React, {useEffect, useState} from 'react'
import LoadingIcon from './LoadingIcon';


export default function FilterCatergorySelect({onFilter}) {
    
  const [isLoading,setIsLoading] = useState(true)
  const [data,setData] = useState(null)




useEffect(() => {
  fetch("https://api.publicapis.org/categories")
  .then(res => res.json())
  .then(data => setData(data?.categories))
  setIsLoading(false)

  return () => {
    []
  }
}, [])


    if(isLoading){
        return <LoadingIcon/> ;
    }

  return (
    <select  onChange={onFilter} className="form-select appearance-none
      block
      w-[30%]
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=" category select ">
        <option key={-1} value={''} selected>All</option>
        
          {
            data?.map((item, i)=>{
                return <option key={i} value={item}>{item}</option>
                
            })
          }  
        
        
    </select>
        
  )
}
