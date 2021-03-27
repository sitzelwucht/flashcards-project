import React, { useEffect } from 'react'
import { Typography, Container, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import Create from './Create'
import { useCards } from '../contexts/CardProvider'
import { useMode } from '../contexts/ModeProvider'
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';



const useStyles = makeStyles({
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignSelf: 'center',
        flex: 1,
        paddingTop: 20,
        background: '#598072',
    },
    flexDark: {
        display: 'flex',
        justifyContent: 'space-between',
        alignSelf: 'center',
        flex: 1,
        paddingTop: 20,
        background: 'rgb(25, 50, 70)',
    },
    maximized: {
        height: '45vh',
        background: '#598072',
        alignItems: 'center'
    },
    maximizedDark: {
        height: '45vh',
        background: 'rgb(25, 50, 70)',
        alignItems: 'center'
    },
    minimized: {
        height: '20vh',
        background: '#598072',
        alignItems: 'center',
        fontSize: '60px'
    },
    minimizedDark: {
        height: '20vh',
        alignItems: 'center',
        fontSize: '60px',
        background: 'rgb(25, 50, 70)',
    },
    bordered: {

    }
})


export default function Header() {

    const classes = useStyles()
    const { cards } = useCards()
    const { mode, toggleMode } = useMode()


    useEffect(() => {
      document.body.className = mode
      console.log(mode)
    }, [mode])

  
    return (
        <Box boxShadow={4}>
            <Box className={mode === 'darkMode' ? classes.flexDark : classes.flex}>
                    <Container className={classes.bordered}>
                        <Typography 
                            className={cards.length > 0 ? (mode === 'darkMode' ? classes.minimizedDark : classes.minimized) : (mode === 'darkMode' ? classes.maximizedDark : classes.maximized) } 
                            variant="h1" 
                            component="h2" 
                            color="secondary" 
                            gutterBottom>
                            <div>
                            <Button onClick={toggleMode} value="lightMode">
                              { mode === 'darkMode' ? <Brightness7Icon fontSize="large" /> : <Brightness2Icon fontSize="large" color="grey" /> }  
                            </Button>
                            </div>
                            <div style={{textAlign: 'center'}}>flashcards</div>
                        </Typography> 
                    </Container>
                    <Container className={classes.bordered}><Create /></Container>
            </Box>
        </Box>
    )
}
