import React, { useState } from 'react'
import usercontext from './usercontext' 

const Usercontextprovider = ({children}) => {

    const [user,setuser] = React.useState(null)

    return (
        <usercontext.Provider value={{user,setuser}}>
            {children}
        </usercontext.Provider>
    )
}
export default Usercontextprovider