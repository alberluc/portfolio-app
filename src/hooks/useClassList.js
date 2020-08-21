import {useMemo} from "react"

class ClassList {
  constructor(classList) {
    this.classList = classList
  }
  add(className) {
    this.classList.push(className)
  }
  toString() {
    return this.classList
      .filter(className => !!className)
      .join(' ');
  }
}

export function useClassList(initial) {
  return useMemo(() => new ClassList(initial), [initial])
}