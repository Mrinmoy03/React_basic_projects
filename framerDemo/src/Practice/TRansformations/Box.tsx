import {motion} from "framer-motion"

export const Box = () => {
  return (
    < motion.div className="box"
     initial={{x:-100}}
     animate={{x:100}}
     transition={{duration: 2}}
    />
  )
}
