import { useState } from "react"
import "../style.css"
import { FaSearch } from "react-icons/fa"

export const SearchIcon = () => {
    const [showInput, setShowInoput] = useState(false)
    const [bgColor, setBgcolor] = useState("white")

    const handleClick = (e) =>{
        setBgcolor("#1a1a1a")
        if(e.target.className == "container"){
            setShowInoput(false)
            setBgcolor("#fff")
        }
    }
  return (
    
    <section className="container" style={{backgroundColor: bgColor}} onClick={handleClick}>
        {showInput ? (
            <input type="text" placeholder="Search..."/>
        ):(
            <FaSearch onClick={ () => setShowInoput(true)}/>
        )}

    </section>
  )
}
