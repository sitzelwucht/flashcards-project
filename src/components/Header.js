import React, { useState } from 'react'
import { Typography, Container, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import Create from './Create'
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
        paddingTop: 20
    },
    banner: {
        height: '30vh',
        background: 'teal',
    }
})


export default function Header() {

    const classes = useStyles()

    const [showForm, setShowForm] = useState(false)

    const handleShow = () => {
        showForm ? setShowForm(false) : setShowForm(true)
    }

    return (
        <Box className={classes.banner} boxShadow={4}>
            <Container className={classes.flex}>
                    <Typography variant="h1" component="h2" color="secondary" gutterBottom>
                        flashcards
                    </Typography> 
                    <Box >
                    {
                        !showForm &&  <Button variant="primary" color="secondary" startIcon={<AddIcon />} onClick={handleShow}>
                        Add card
                        </Button>
                    } 

                    {showForm && <Create />}
                    
                    </Box>
            </Container>
        </Box>
    )
}
