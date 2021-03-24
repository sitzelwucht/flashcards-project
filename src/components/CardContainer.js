import React from 'react'
import Card from './Card'
import { Container } from '@material-ui/core'
import { useCards } from '../contexts/CardProvider'


export default function CardContainer() {

    const { cards } = useCards()

    return (
        <Container>


        {
            cards.map((item, i) => {
                return <Card key={i} question={item.question} answer={item.answer}/>
            })  

        }
            
        </Container>
 
    )
}
