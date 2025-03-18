import { motion } from "framer-motion"
 
 export const Gesture = () => {
   return (
     <div>
         {/* while Hover */}
        {/* <motion.div className="box"
        whileHover={{scale:1.2, rotate:30}}
        transition={{
            duration:1,
            ease:"easeInOut"
        }}
        
        /> */}

        {/* whileTap */}
        {/* <motion.div className="box"
         whileTap={{
            scale:2,
            backgroundColor:'crimson'
         }}
         transition={{
            duration:1,
            ease:"easeInOut"
        }}
        /> */}


        {/* while drag */}
        <motion.div className="box"
        drag 
        dragConstraints ={{
            top: -50,
            left:-50,
            right:-50,
         bottom:-50,
        }}
        />


     </div>
   )
 }
 