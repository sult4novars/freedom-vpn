import type { FC, ReactNode } from 'react'
import {motion, type MotionProps } from "framer-motion"

type Props = {
  children: ReactNode;
  className?: string;
}

const ScrollAnimationWrapper: FC<Props & MotionProps> = ({children, className, ...props}) =>  {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimationWrapper
