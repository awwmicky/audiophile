import { useEffect, useLayoutEffect } from 'react'

// if browser, apply useLayoutEffect; if SSR, apply useEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export { useIsomorphicLayoutEffect }
