import { FormEvent, useRef, useState } from "react"
type fromData ={
    name:string;
    email: string;
    password:string
}

export const Form = () => {

    const [submitedData, setSubmittedData] = useState<fromData>({
      name:'',
      email: '',
      password: '',
    })
  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
const handleSubmit= (e: FormEvent<HTMLElement>) =>{
    e.preventDefault()
    const  nameValue = name.current!.value
    const  emailValue = email.current!.value
    const  passwordValue = password.current!.value

    setSubmittedData({
        name: nameValue,
        email : emailValue,
        password : passwordValue

    })
}

  return (
    <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Enter your name" ref={name} />
       <input type="email" placeholder="Enter your email" ref={email} />
       <input type="password" placeholder="Enter your password" ref={password} />
       <button type="submit">submit</button>
       <section>
        <h1>name: {submitedData.name}</h1>
        <h1>email:{submitedData.email}</h1>
        <h1>password: {submitedData.password}</h1>
       </section>
    </form>
  )
}
