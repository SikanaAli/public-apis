"use client";

import { requestToBodyStream } from 'next/dist/server/body-streams';
import React, {useEffect, useState} from 'react'


export default function FilterCatergorySelect({data,onFilter}) {
    

    if(!data){
        return "";
    }

  return (
    <select onChange={onFilter} className="form-select appearance-none
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
        <option value={''} selected>All</option>
        
          {
            data?.map((item, i)=>{
                return <option value={item}>{item}</option>
                
            })
          }  
        
        
    </select>
        
  )
}
