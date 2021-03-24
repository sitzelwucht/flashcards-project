import React from 'react'
import { Button, Typography, Container } from '@material-ui/core';


export default function Header() {

    return (
        <Container>
           <Typography 
            variant="h1"
            component="h2" 
            color="primary"
            gutterBottom>flashcards</Typography> 

            <Button
            className="primary"
            variant="contained"
            color="secondary"
            >
            add new flashcard
            </Button>

        </Container>
    )
}
