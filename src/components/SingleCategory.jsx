import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const SingleCategory = () => {
    const mydata = useParams();
    console.log(mydata.data)
    const [finalData,setFinalData]=useState([])
    let main = ""
    useEffect(()=>{
      main = axios.get(`https://api.unsplash.com//collections/${mydata.data}/photos?client_id=09Bnn9riakdQw7e3YVoEXwyKSRkVd4oZmu_9ijMH3Lo`).then((res)=>{
      return res.data
      })
      console.log(main)
    },[])
  return (
    <div>
      
    </div>
  )
}

export default SingleCategory
