import { motion } from "framer-motion";

const ZigzagAnimation = () => {
  return (
    <motion.div
      className="w-16 h-16 bg-green-500"
      animate={{
        x: [0, 50, 100, 50, 0, -50, -100, -50, 0], // More points for smoother motion
        y: [0, -50, 0, 50, 0, 50, 0, -50, 0], // Matching y values for zigzag
      }}
      transition={{
        duration: 4, // Longer duration for smoother feel
        repeat: Infinity,
        ease: "easeInOut", // Smooth easing
      }}
    />
  );
};

export default ZigzagAnimation;
