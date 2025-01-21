import { useScrollCallback } from '@/hooks/useScrollCallback'
import { useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export type IScheduleIndicator = {
  isFirstStep?: boolean
  isLastStep?: boolean
}

export function ScheduleIndicator({ isFirstStep, isLastStep }: IScheduleIndicator) {
  const [isInView, setIsInView] = useState(false)
  const [isNextInView, setIsNextInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useScrollCallback(() => {
    if (ref.current) {
      const { top, height } = ref.current.getBoundingClientRect()
      setIsInView(top / window.innerHeight < 1 / 2)
      setIsNextInView((top + height) / window.innerHeight < 1 / 2)
    }
  }, [ref])

  return (
    <div className="flex justify-center items-start relative h-full" ref={ref}>
      <div
        className={twMerge(
          'relative flex items-center justify-center overflow-hidden rounded-full bg-white z-[1] w-8 aspect-square shadow-grey-400 transition-shadow md:w-16 duration-300',
          isInView || isFirstStep ? 'shadow-[0px_0px_0px_0px]' : 'shadow-[0px_0px_0px_1px]',
        )}
      >
        <div
          className={twMerge(
            'absolute left-0 top-0 size-full bg-yellow-400 rounded-full transition-all duration-100 md:duration-300',
            isInView || isFirstStep ? 'scale-[1] opacity-[1]' : 'scale-[0.2] opacity-[0]',
          )}
        />
      </div>
      {!isLastStep && (
        <div
          className={twMerge(
            'absolute left-1/2 w-0.5 top-0 bottom-0 transition-[background] duration-300 -translate-x-1/2 md:w-1.5',
            isNextInView ? 'bg-yellow-400' : 'bg-grey-400',
          )}
        />
      )}
    </div>
  )
}
