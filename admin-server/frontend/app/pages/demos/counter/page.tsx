'use client'

import { Button } from "@mui/material"
import { useState } from "react"




export default function Counter(){

const [count,setCount] = useState(Number)

const foo = () =>{
setCount(count+1)
}

const bar =() =>{
setCount(count-1)
}
    return(<div className="text-center">
    <h1>Counter : {count}</h1>
    <Button onClick = {foo}>+</Button><br />
    <Button onClick = {bar}>-</Button>
    
    </div>)
}