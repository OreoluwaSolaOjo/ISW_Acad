import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { GetUserContext } from './getUsercontext'
import { UserAuthContext } from './UserAuthContext'

export const stateContext = createContext()
const {val, setVal} = createContext(UserAuthContext)
const{user,setUser} =createContext(GetUserContext)
export const getFreshContext = () => {
    if(sessionStorage.getItem('context') ===null){
    sessionStorage.setItem('context', JSON.stringify({
    
        timeTaken: 0,
        selectedOptions: [],
    }))  }
    return JSON.parse(sessionStorage.getItem('context'))
}
export default function useStateContext(){
    const {context, setContext} = useContext(stateContext)
    return {context, setContext: obj => {setContext({...context, ...obj})}
  }
}
export function ContextProvider({children}) {
    
  const [context, setContext] = useState(getFreshContext())
  useEffect(() => {
    sessionStorage.setItem('context', JSON.stringify(context))
}, [context])
    return (
 <stateContext.Provider value={{context, setContext}}>
    {children}
 </stateContext.Provider>
  )
}
