import {motion} from "framer-motion"

export const BouncingCircle = () => {
  return (
    < motion.div className="box"
  
    animate={{ y: [0, -100, 0] }}
    transition={{duration: 1, repeat: Infinity , ease: "easeInOut"}}
   />
  )
}
