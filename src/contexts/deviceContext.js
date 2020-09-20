import React, {createContext, useState} from "react"

export const DeviceContext = createContext(null)
export const DeviceProvider = function ({children}) {

  const [device, setDevice] = useState(null)

  return (
    <DeviceContext.Provider value={{device, setDevice}}>
      {children}
    </DeviceContext.Provider>
  )
}