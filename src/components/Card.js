import React, { useState } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    box: {
        maxWidth: '300px',
        minWidth: '300px',
        maxHeight: '260px',
        minHeight: '220px',
        border: '1px black primary',
        background: '#f4f4f4',
        margin: 20,
        textAlign: 'center'
    },
    header: {
        fontSize: 24,
        padding: 10,
        margin: 10,
        color: 'orange',
    },
    text: {
        fontSize: 18,
        padding: 10,
        margin: 10,
        overflow: 'auto'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between'
    }
    
})

export default function Card(props) {

    const classes = useStyles()

    const [show, setShow] = useState(false)

    const handleShow = () =>  {
        show ? setShow(false) : setShow(true)
    }


    return (
        <Box boxShadow={4} className={classes.box}>
           <Box className={classes.flex}>
                <Button><EditIcon /></Button>
                <Button onClick={props.onRemove}><DeleteOutlineIcon /></Button>
            </Box> 
            <Typography className={classes.header}>{props.question}</Typography>
            <Button align="center" onClick={handleShow}>Show/hide answer</Button>

            {
              show && <Typography className={classes.text} color="primary">{props.answer}</Typography>
            
            }

        </Box>
    )
}
