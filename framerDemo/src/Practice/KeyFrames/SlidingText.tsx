import { motion } from "framer-motion";

const SlidingText = () => {
  return (
    <motion.h1
      className="text-2xl font-bold text-white"
      initial={{ x: "-100%" }}
      animate={{ x: 100}}
      transition={{ duration: 1 , repeat: Infinity, repeatType:'reverse'}}
    >
      Slide In Text
    </motion.h1>
  );
};

export default SlidingText;