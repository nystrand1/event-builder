import { differenceInSeconds } from 'date-fns'

export const breakDateIntoParts = (firstDate: Date, secondDate: Date) => {
  const diff = Math.abs(differenceInSeconds(firstDate, secondDate))

  const secondsInMinute = 60
  const secondsInHour = secondsInMinute * 60
  const secondsInDay = secondsInHour * 24
  const secondsInYear = secondsInDay * 365

  const years = Math.floor(diff / secondsInYear)
  const remainingAfterYears = diff % secondsInYear

  const days = Math.floor(remainingAfterYears / secondsInDay)
  const remainingAfterDays = remainingAfterYears % secondsInDay

  const hours = Math.floor(remainingAfterDays / secondsInHour)
  const remainingAfterHours = remainingAfterDays % secondsInHour

  const minutes = Math.floor(remainingAfterHours / secondsInMinute)
  const seconds = remainingAfterHours % secondsInMinute

  return {
    years,
    days,
    hours,
    minutes,
    seconds,
  }
}
