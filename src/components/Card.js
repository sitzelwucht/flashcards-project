import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    box: {
        border: '1px solid grey',
        maxWidth: '300px',
        padding: '5px'
    },
    header: {
        fontSize: 24,
        color: 'orange',
    },
    text: {
        fontSize: 18,
        color: 'grey'
    },
    
})

export default function Card() {

    const classes = useStyles()

    return (
        <Box className={classes.box}>
            <Typography
            className={classes.header}>This is a header
            </Typography>

            <Typography className={classes.text}>this is text</Typography>

        </Box>
    )
}
