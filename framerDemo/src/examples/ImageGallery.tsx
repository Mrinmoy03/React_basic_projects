
import { motion } from "framer-motion"
import { div } from "framer-motion/client";
const images = [
    {
      src: "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Caption for Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Caption for Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=3877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Caption for Image 3",
    },
  ];

export const ImageGallery = () => {
  return (
    <div className="w-[80%] flex " > 
    {
       images.map((image, index)=>(
        <motion.div 
        whileHover={{
            scale:1.05
        }}
        key={index} className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg">
            <img src={image.src} className="w-full h-auto"  />
            <motion.div 
            whileHover={{
                opacity:1
            }}
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <p className="text-large">{image.caption}</p>

            </motion.div>
        </motion.div>
       )) 
    }
    </div>
  )
}
