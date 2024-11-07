import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
//     const [data,setdata] = useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/patelromit6952')
//         .then((res)=>res.json())
//         .then((data)=>{
//             console.log(data.avatar_url)
//             setdata(data)
//         })
//     },[]) 

 const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubinfoloader = async () => {
    const response = await fetch('https://api.github.com/users/patelromit6952')
    return response.json()
}