import { type MotionProps } from 'framer-motion';

export const animations = {
  timelineTitle: {
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      margin: '-30%',
    },
    transition: {
      delay: 0.2,
      duration: 1,
    },
    initial: {
      opacity: 0,
      y: 60,
    },
  } as MotionProps,
  timelineDescription: {
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      margin: '-30%',
    },
    transition: {
      delay: 0.5,
      duration: 0.8,
    },
    initial: {
      opacity: 0,
      y: 60,
    },
  } as MotionProps,
  timelineMobile: {
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
    },
    transition: {
      duration: 0.6,
    },
    initial: {
      opacity: 0,
      y: 30,
    },
  } as Omit<MotionProps, 'style'>,
};
