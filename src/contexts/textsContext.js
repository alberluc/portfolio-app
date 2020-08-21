import React, {createContext} from "react"
import {useQuery} from "@apollo/client"
import {GET_TEXTS} from "../documents/TextsDocument"

export const TextsContext = createContext(null)
export const TextsProvider = function ({children}) {

  const {data} = useQuery(GET_TEXTS)
  const getText = code => !data
    ? null
    : data.getTexts.find(text => text.code === code)?.content

  return (
    <TextsContext.Provider value={{getText}}>
      {children}
    </TextsContext.Provider>
  )
}