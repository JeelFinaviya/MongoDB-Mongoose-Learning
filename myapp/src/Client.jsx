import { useState } from "react";
import axios from "axios";

const Client = ()=>{
    const [userName,setUsername] = useState('')
    const handleSignup = async(e)=>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/signup',{ userName })
            alert('welcome '+userName)
            setUsername('')
        } catch (error) {
            console.log(err)
        }
    }

    return(
        <>
        <form action="" onSubmit={handleSignup}>
            <input type="text" name="" value={userName} onChange={(e)=>{setUsername(e.target.value)}} id="" />
            <button>submit</button>
            <h1>{userName}</h1>
            </form>        
        </>
    )
}

export default Client