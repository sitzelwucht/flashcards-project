import React from 'react'
import FlashCard from './FlashCard'
import { Container } from '@material-ui/core'
import { useCards } from '../contexts/CardProvider'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    flex: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 20
    }
})


export default function CardContainer() {

    const classes = useStyles()
    const { cards } = useCards()
    const { removeCard } = useCards()

    // delete card
    const handleAction = (elem) => {
      removeCard(cards, elem.question)     
    }


    return (
        <Container className={classes.flex}>
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
        </Container>
 
    )
}
