import React, { useState } from 'react'
import { useMutation} from '@apollo/client'
import { CREATE_USER} from '../Graphql/Mutation'


const CreateUser = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [createUser, {error}] = useMutation(CREATE_USER);
    return (
        
    <div className="h-3/5 py-20 flex items-center justify-center bg-gray-100 ">
        <div className="h-80 w-80 border border-gray-300 bg-white rounded flex flex-col justify-center items-center space-y-2 shadow-md">
          <h1 className="text-3xl font-bold pb-3 text-blue-800">CREATE USER</h1>
          <input className="py-2 px-2 w-2/3 border border-gray-700 rounded" type="text" placeholder="name.." onChange={(e) => setName(e.target.value)}/>
          <input className="py-2 px-2 w-2/3 border border-gray-700 rounded" type="text" placeholder="username.." onChange={(e) => setUsername(e.target.value)}/>
          <input className="py-2 px-2 w-2/3 border border-gray-700 rounded" type="password" placeholder="password.." onChange={(e) => setPassword(e.target.value)}/>
          <button className="py-2 px-2 bg-blue-500 text-white rounded-sm hover:bg-blue-700" onClick={() => {createUser({ variables: { name: name, username: username, password: password }})}}>CREATE</button>
        </div>
      </div>
    )
}

export default CreateUser
