// import React from "react";
import { useState } from 'react'
import axios from 'axios'

const Form = ()=>{
    const [userName,setUsername] = useState('')

    const handleUsername = async(e)=>{
        e.preventDefault()
        try {

            await axios.get('http://localhost:5000/insert',{username:userName})
            alert('data saved')
            setUsername('')
            
        } catch (error) {
            
        }
    }
    return(
        <>
        <form onSubmit={handleUsername}>username:
            <input type="text" name="uname" value={userName} onChange={(e)=>{setUsername(e.target.value)}} id="" />
            <input type="submit" value="submit" />

        </form>
        </>
    )
}

export default Form