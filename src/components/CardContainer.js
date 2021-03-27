import React from 'react'
import FlashCard from './FlashCard'
import { Box } from '@material-ui/core'
import { useCards } from '../contexts/CardProvider'
import { makeStyles } from '@material-ui/core'
import { useMode } from '../contexts/ModeProvider'


const useStyles = makeStyles({
    flex: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 20
    },
    dark: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '100%',
         height: '100vh',
        background: 'rgb(20,20,20)',
        color: 'white'
    },

})


export default function CardContainer() {

    const classes = useStyles()
    const { cards } = useCards()
    const { removeCard } = useCards()
    const { mode } = useMode()

    // delete card
    const handleAction = (elem) => {
      removeCard(cards, elem.question)     
    }


    return (
        <Box className={mode === 'darkMode' ? classes.dark : classes.flex }>
            <Box>
            {
                cards.map((item, i) => {
                    return <FlashCard 
                            key={i} 
                            question={item.question} 
                            answer={item.answer} 
                            onAction={() => handleAction(item)} 
                            />
                })  
            }
            </Box>
        </Box>
 
    )
}
