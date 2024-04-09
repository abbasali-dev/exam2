import { Dispatch, SetStateAction, createContext } from "react"

export const ResultContext = createContext({} as { isResultActive: boolean, setIsResultActive: Dispatch<SetStateAction<boolean>> })
