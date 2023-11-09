import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function FetchWizClass() {
  const [wizClass, setWizClass] = useState([])

  useEffect(() => {
    axios.get('https://questgangapi.onrender.com/userClasses?classId=2')
      .then(res => {setWizClass(res.data)})
      .catch(err => console.log(err))
  
  }, [])

  console.log(wizClass)
  return(
    wizClass.className
    // <div>
    //   <ul>
    //     {wizClass.map((list, index) => (
    //       <li key={index}>{list.id} | {list.name}</li>
    //         ))}
    //   </ul>
    // </div>
  )
}


export default FetchWizClass;