import React, { useContext, createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const CardContext = createContext()



export const useCards = () => {
    return useContext(CardContext)
}

export function CardProvider({children}) {

    const [cards, setCards] = useLocalStorage('cards', [])

    const createCard = (question, answer) => {
        setCards(prevCards => {
            return [...prevCards, {question, answer}]
        })
    }

    return (
        <CardContext.Provider value={{ cards, createCard }}>
            {children}
        </CardContext.Provider>
    )
}
