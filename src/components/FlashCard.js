import React, { useState, useRef } from 'react'
import { Box, Typography, Button, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useCards } from '../contexts/CardProvider'
import { useMode } from '../contexts/ModeProvider'
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles({
    box: {
        maxWidth: '330px',
        minWidth: '330px',
        maxHeight: '330px',
        minHeight: '220px',
        border: '1px black primary',
        background: '#f4f4f4',
        margin: 20,
        textAlign: 'center',
        overFlow: 'hidden',
        paddingBottom: 20
    },
    boxDark: {
        maxWidth: '330px',
        minWidth: '330px',
        maxHeight: '330px',
        minHeight: '220px',
        border: '1px black primary',
        margin: 20,
        textAlign: 'center',
        overFlow: 'hidden',
        paddingBottom: 20,
        background: 'rgb(50,50,50)'
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
        margin: 15,
        overflowY: 'auto',
        maxHeight: '150px',
        textAlign: 'left'
    },
    textDark: {
        fontSize: 16,
        padding: 10,
        margin: 15,
        color: 'rgb(220,220,220)',
        overflowY: 'auto',
        maxHeight: '150px',
        textAlign: 'left'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        background: '#e9e9e9'
    },
    flexDark: {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'rgb(80,80,80)'
    },

    
})

const inputField = {
    border: '0',
    outline: 'none',
    fontSize: 16,
    marginTop: 15,
    padding: 7,
    fontFamily: 'monospace',
    background: 'rgba(0,0,0,0)',
    borderBottom: '1px solid grey',
    resize: 'none'
}
export default function FlashCard(props) {

    const classes = useStyles()
    const { createCard } = useCards()
    const { mode } = useMode()
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
                            { showAnswer && <Typography className={ mode === 'darkMode' ? classes.textDark : classes.text }>{props.answer}</Typography> } 
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
                            rows="7"
                            ref={answerRef} 
                            defaultValue={props.answer} 
                            onChange={(e) => setAnswer(e.target.value)} />

                            <Button type="submit">Save</Button>

                        </form> )

    return (
        <Card boxShadow={4} className={mode === 'darkMode' ? classes.boxDark : classes.box}>
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
