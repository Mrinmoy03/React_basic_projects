
import { motion } from "framer-motion"
import { useState } from "react"
const varients = {
    hidden:{opacity:0, scale:0.8},
    visible:{opacity:1, scale:1},
    exit:{opacity:0, scale:0.5}
  }

const VisibleCircle = () => {
    const [isVisible, setIsVisible] = useState(true)
  return (
    <motion.div className="box" 
    variants={varients}
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    exit='exit'
    transition={{duration:2}}
    onClick={()=>setIsVisible(!isVisible)}   />
  )
}

export default VisibleCircle