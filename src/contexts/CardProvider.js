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

    const removeCard = (cardArray, subKey) => {
        const updatedCards = cardArray.filter(elem => {
            return elem.question !== subKey
        })

        setCards(updatedCards)
    }
    
    return (
        <CardContext.Provider value={{ cards, createCard, removeCard }}>
            {children}
        </CardContext.Provider>
    )
}
