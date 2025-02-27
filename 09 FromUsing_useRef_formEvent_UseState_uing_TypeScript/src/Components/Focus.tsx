import { useRef } from "react"


export const Focus = () => {
   const inputRef = useRef<HTMLInputElement>(null)
   const handelFocus =()=>{
    inputRef.current?.focus()
   }
  return (
    <>
    <input type="text"  ref={inputRef} placeholder="Click Button to Focus"/>
    <button onClick={handelFocus}>FocusInput</button>
    </>
  )
}
