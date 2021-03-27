import React, { useState, useRef } from 'react'
import { Box, Typography, Button, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useCards } from '../contexts/CardProvider'
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles({
    box: {
        maxWidth: '300px',
        minWidth: '300px',
        maxHeight: '330px',
        minHeight: '220px',
        border: '1px black primary',
        background: '#f4f4f4',
        margin: 20,
        textAlign: 'center',
        overFlow: 'hidden'
    },
    header: {
        fontSize: 24,
        padding: 10,
        margin: 10,
        color: 'teal',
    },
    text: {
        fontSize: 16,
        padding: 10,
        margin: 10,
        overflowY: 'auto',
        maxHeight: '150px',
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        background: '#e9e9e9'
    }
    
})

const inputField = {
    border: '0',
    outline: 'none',
    fontSize: 16,
    marginBottom: 5,
    padding: 7,
    fontFamily: 'monospace',
    background: 'rgba(0,0,0,0)',
    borderBottom: '1px solid grey'
}
export default function FlashCard(props) {

    const classes = useStyles()
    const { createCard } = useCards()
    const [showAnswer, setShowAnswer] = useState(false)
    const [showEditing, setShowEditing] = useState(false)

    const questionRef = useRef()
    const answerRef = useRef()

    const [question, setQuestion] = useState()
    const [answer, setAnswer] = useState()

    const handleShowAnswer = () =>  {
        showAnswer ? setShowAnswer(false) : setShowAnswer(true)
    }

    const handleShowEditing= () => {
        setShowEditing(true)
    }

    // delete old entry, replace with a new one
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAction()
        createCard(questionRef.current.value, answerRef.current.value)
        setShowEditing(false)
    }

    const questionText = (<>
                            <Typography className={classes.header}>{props.question}</Typography>
                            <Button align="center" onClick={handleShowAnswer}> { showAnswer ? <VisibilityOffIcon /> : <VisibilityIcon /> } answer </Button>
                            { showAnswer && <Typography className={classes.text}>{props.answer}</Typography> } 
                        </>)

    const editForm = (<form style={{display: 'flex', flexDirection: 'column', margin: '20px'}} onSubmit={handleSubmit}>

                            <input 
                            style={inputField} 
                            ref={questionRef} 
                            defaultValue={props.question} 
                            onChange={(e) => setQuestion(e.target.value)} />

                            {/* <input 
                            style={inputField} 
                            ref={answerRef} 
                            defaultValue={props.answer} 
                            onChange={(e) => setAnswer(e.target.value)} /> */}
                           <textarea 
                            style={inputField} 
                            ref={answerRef} 
                            defaultValue={props.answer} 
                            onChange={(e) => setAnswer(e.target.value)} />

                            <Button type="submit">Save</Button>

                        </form> )

    return (
        <Card boxShadow={4} className={classes.box}>
           <Box className={classes.flex}>
                 
                <Button onClick={handleShowEditing}><EditIcon /></Button>

                <Button onClick={props.onAction}><DeleteOutlineIcon /></Button>
            </Box> 
            {
                showEditing ? editForm : questionText
            }
        </Card>
    )
}
