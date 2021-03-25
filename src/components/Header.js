import React from 'react'
import { Typography, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import Create from './Create'



const useStyles = makeStyles({
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
        paddingTop: 20
    },
    banner: {
        height: '30vh',
        background: '#598072',
    }
})


export default function Header() {

    const classes = useStyles()



    return (
        <Box className={classes.banner} boxShadow={4}>
            <Container className={classes.flex}>
                    <Typography variant="h1" component="h2" color="secondary" gutterBottom>
                        flashcards
                    </Typography> 
                    <Create />
            </Container>
        </Box>
    )
}
