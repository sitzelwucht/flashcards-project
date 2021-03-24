import React, { useState, useEffect } from 'react'
import Card from './Card'
import { Container } from '@material-ui/core'
import { useCards } from '../contexts/CardProvider'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
    }
})


export default function CardContainer() {

    const classes = useStyles()
    const { cards } = useCards()
    const { removeCard } = useCards()


    const handleRemove = (elem) => {
      removeCard(cards, elem.question)
     
    }

    return (
        <Container className={classes.flex}>
        {
            cards.map((item, i) => {
                return <Card key={i} question={item.question} answer={item.answer} onRemove={() => handleRemove(item)}/>
            })  
        }
        </Container>
 
    )
}
