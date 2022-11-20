import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../../../context/useStateContext'

export default function Question() {
 const{context, setContext} = useContext(stateContext)
 setContext({
    
 })
    return (
    <div>Question</div>
  )
}
