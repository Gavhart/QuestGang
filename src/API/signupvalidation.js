import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function ValidateLogin() {
  const [login, setLogin] = useState([])

  useEffect((username, password) => {
    axios.get('https://questgangapi.onrender.com/userLogin?username={usernamef}&password=1234')
      .then(res => {setLogin(res.data)})
      .catch(err => console.log(err))
  
  }, [])

  // console.log(wizClass)
  return(
    login
    // <div>
    //   <ul>
    //     {wizClass.map((list, index) => (
    //       <li key={index}>{list.id} | {list.name}</li>
    //         ))}
    //   </ul>
    // </div>
  )
}