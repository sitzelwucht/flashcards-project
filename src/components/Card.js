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

export default function Card(props) {

    const classes = useStyles()

    return (
        <Box className={classes.box}>
            <Typography className={classes.header}>{props.question}</Typography>

            <Typography className={classes.text}>{props.answer}</Typography>

        </Box>
    )
}
