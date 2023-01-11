"use client";

import { requestToBodyStream } from 'next/dist/server/body-streams';
import React, {useEffect, useState} from 'react'


export default function FilterCatergorySelect() {
    const [categories, setCategories] = useState(null)

    useEffect(()=>{
        fetch("https://api.publicapis.org/categories")
        .then(res => res.json())
        .then(data => setCategories(data?.categories))
    })

    if(!categories){
        return "";
    }
  return (
        categories.map((item, i)=>{
            <li>
                <button type='button' className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>item</button>
            </li>
        })
  )
}
