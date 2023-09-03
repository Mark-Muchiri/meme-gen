import './PassingDataAround.css'
import Header from './Header'
import Body from './Body';
import { useState } from "react"

export default function PassingDataAround() {
    const [user, setUser] = useState("Joe")
    
    function name() {
        setUser()
    }

    return (
        <>
            <Header user = {user} onClick={name} />
            <Body user = {user}/>
        </>
    )
}