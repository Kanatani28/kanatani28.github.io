import { MotionProps } from 'framer-motion'

export const pagingAnimationProps : MotionProps = {
  animate: {
    y: 0,
    opacity: 1
  },
  initial: {
    y: '100vh',
    opacity: 0
  },
  exit: {
    y: '-100vh',
    opacity: 0
  },
  transition: {
    duration: 0.5,
    ease: 'easeOut'
  }
}
