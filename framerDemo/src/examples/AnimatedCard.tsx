import { motion } from "framer-motion"

export const AnimatedCard = () => {
  return (
    <motion.div
     initial={{
        scale:1,
        rotate:0
     }}
     whileHover={{
        scale:1.05,
        rotate:3
     }}
     whileTap={{
        scale:.8
     }}
     drag
     dragConstraints={{
        left: -50,
        right:50,
        top: -50,
        bottom:50,
     }}
     transition={{
        type:"spring",
        stiffness:300
     }}
    
    className="max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden cursor-pointer bg-white">
    <img  className='w-full h-48 object-cover' src="https://images.unsplash.com/photo-1735342623457-b683e0ba1c2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card img" />
     <div className="p-3">
        <h2 className="text-xl text-black font-semibold mb-2">Card Title</h2>
        <p className="text-gray-700 mb-4">
            simple card with Framer motion animations and tailwind css for styiling and react
        </p>
        <button className="px-4 py-2 bg-teal-400 text-white rounded hover:bg-teal-600">Learn more</button>
     </div>

    </motion.div>
  )
}
