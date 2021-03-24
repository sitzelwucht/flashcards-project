import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    header: {
        fontSize: 20,
        color: 'purple',
        align: 'center'
    },
    text: {
        fontSize: 10,
        color: 'grey'
    }
})

export default function Card() {

    const classes = useStyles()

    return (
        <Box>
            <Typography
            className={classes.header}>This is a header
            </Typography>

            <Typography className={classes.text}>this is text</Typography>
            
        </Box>
    )
}
