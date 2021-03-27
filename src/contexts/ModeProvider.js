import React, { useContext, createContext} from 'react'
import useLocalStorageState from '../hooks/useLocalStorageState'


const ModeContext = createContext()


export const useMode = () => {
    return useContext(ModeContext)
}
export function ModeProvider({children}) {

    const [mode, setMode] = useLocalStorageState('mode', 'lightMode')


    const toggleMode = (e) => {
        mode === 'lightMode' ? setMode('darkMode') : setMode('lightMode')
        // setMode(e.currentTarget.value)
    }

    return (
      
        <ModeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ModeContext.Provider>
            

    )
}
