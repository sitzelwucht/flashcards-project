import React from 'react'
import FlashCard from './FlashCard'
import { Box } from '@material-ui/core'
import { useCards } from '../contexts/CardProvider'
import { makeStyles } from '@material-ui/core'
import { useMode } from '../contexts/ModeProvider'


const useStyles = makeStyles({
    light: {
        width: '100%',
        marginTop: 20,
    },
    dark: {
        width: '100%',
        height: '100vh',
        background: 'rgb(20,20,20)',
        color: 'white',
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    }
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
        <Box className={mode === 'darkMode' ? classes.dark : classes.light }>
            <Box className={classes.flex}>
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
