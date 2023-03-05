import confetti from 'canvas-confetti'

export const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  minimumFractionDigits: 0,
	// (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0,
	// (causes 2500.99 to be printed as $2,501)
})

/*  */

export const debounce = <F extends (...args: unknown[]) => unknown>(
  callback: F,
  waitTime: number = 1000
) => {
	// console.info('[debounce]')
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<F>): ReturnType<F> => {
    let result: any
		if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      result = callback(...args)
    }, waitTime)
    return result
  }
}

/*  */

const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min
const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }
const [ duration, TIMER ] = [ (5 * 1000), 250 ]

export const runFireworks = () => {
  const animationEnd = Date.now() + duration
	const yAxis = Math.random() - 0.2

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) return clearInterval(interval)

    const particleCount = 50 * (timeLeft / duration)
    // adjust confetti start point
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: yAxis } }))
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: yAxis } }))
  }, TIMER)
}
