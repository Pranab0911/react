import React, { useEffect } from 'react'
import { useState } from 'react';

function Git() {
    const [data,setData]=useState([])
useEffect(
    ()=>{
          fetch('https://api.github.com/users/Pranab0911')
          .then(response =>response.json())
          .then(data =>{
            console.log(data);
            setData(data)
          } )
    },[]
)

  return (
    <div className='text-center py-4
     bg-gray-700 text-3xl'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture "  width={200}  />
        </div>
  )
}

export default Git