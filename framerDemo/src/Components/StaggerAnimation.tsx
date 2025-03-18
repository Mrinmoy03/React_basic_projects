import { motion } from "framer-motion"
const ParentVarients={
  hidden:{opacity:0},
  visible:{
    opacity:1,
    transition:{
      staggerChildren:0.8,
    }
  }
}

const ChildVarient ={
  hidden:{opacity:0, y:20},
  visible:{opacity:1, y:0},

}

export const StaggerAnimation = () => {
  return (
    <motion.div variants={ParentVarients}
    initial='hidden'
    animate='visible'
    >

        {[...Array(5)].map((_,index)=>(
            <motion.div className="box mt-[2rem]" variants={ChildVarient} key={index} />


            
        ))}
    </motion.div>
  )
}
