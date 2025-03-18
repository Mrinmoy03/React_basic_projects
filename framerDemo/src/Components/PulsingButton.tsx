import { motion } from "framer-motion"


export const PulsingButton = () => {
  return (
    <motion.button className="bg-blue-500 px-4 py-2 rounded text-white outline-none"
    animate={{
        scale:[1,2,1],
        backgroundColor: ["#0000FF", "#008000"]
    }}
    transition={{duration:4, repeat: Infinity}}
    >
    Click Me
  </motion.button>
  

)
}
