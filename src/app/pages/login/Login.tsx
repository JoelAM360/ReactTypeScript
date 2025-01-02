import { useEffect, useState } from "react"
import { InputLogin } from "./components/InputLogin"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")

    const handleEntrar = () => {
        console.log(email);
        console.log(password);
        
    }

   useEffect(() => {
    handleEntrar()
   }, [])

    return (
        <div>
           <form action=""> 
           <InputLogin value={email} label={"Email"} onChange={newValue => setEmail(newValue)}/>
           <InputLogin type="password" value={password} label={"Password"} onChange={newValue => setPassword(newValue)}/>

            <button type="button" onClick={handleEntrar}>Entrar</button>
           </form>
        </div>
    )
}