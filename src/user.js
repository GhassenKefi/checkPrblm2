import axios from 'axios'
import React, { useState } from 'react'

const User = () => {

    const[user,setUser]= useState('') 

    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(user);
        axios.post('http://localhost:8080/user',{firstName:user}).then(res =>console.log(res))
    }

    return (
            <form onSubmit={handleSubmit}>
                <input type='text' value={user} onChange={e => setUser(e.target.value)} />
                <input type="submit" value="Add Task" className="AddTask Btn"/>
            </form>
    )
}

export default User


