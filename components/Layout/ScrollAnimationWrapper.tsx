import { FC } from 'react'
import {motion} from "framer-motion";

type Props = {
  children: string
  className: string
}

const ScrollAnimationWrapper: FC<Props> = ({children, className, ...props}) => {
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
