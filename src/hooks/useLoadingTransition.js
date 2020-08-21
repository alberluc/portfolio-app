import {useEffect, useState} from "react"

export function useLoadingTransition(loading) {

  function onLoadingChange() {
    if (loading) {
      setTimeout(() => setStartTransition(true), 50)
    }
  }

  const [startTransition, setStartTransition] = useState(false)

  useEffect(onLoadingChange, [loading])
  useEffect(() => () => setStartTransition(false), [])

  return startTransition
}