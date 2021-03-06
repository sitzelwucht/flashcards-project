import React, { useState } from 'react'
import { Container, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { useCards } from '../contexts/CardProvider'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    flex: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    field: {
        marginTop: 5,
        marginBottom: 10,
    }
})

export default function Create() {


    const { createCard } = useCards()
    const classes = useStyles()

    const [question, setQuestion] = useState()
    const [questionError, setQuestionError] = useState()
    const [answer, setAnswer] = useState()
    const [answerError, setAnswerError] = useState()

    const [showForm, setShowForm] = useState(false)

    const handleShow = () => {
        showForm ? setShowForm(false) : setShowForm(true)
    }

    // check if fields are empty, then submit, hide form and set field values to null
    const handleSubmit = (e) => {
        e.preventDefault()
        setQuestionError(false)
        setAnswerError(false)

        if (!question) {
            setQuestionError(true)
            return
        }
        if (!answer) {
            setAnswerError(true)
            return
        }

        createCard(question, answer)
        setShowForm(false)
        setQuestion(null)
        setAnswer(null)
    }


    return (
       <Container >
    
        {
            showForm ?
            <form className={classes.flex} onSubmit={handleSubmit} noValidate autoComplete="off" >
                <TextField className={classes.field} label="new question" variant="outlined" required
                error={questionError}
                onChange={(e) => {setQuestion(e.target.value)}}    
                />
                <TextField className={classes.field} label="answer" variant="outlined" required
                error={answerError}
                onChange={(e) => {setAnswer(e.target.value)}}    
                />
                <Button type="submit">save</Button>
            </form> :
            <Button size="large" variant="outlined" color="white" onClick={handleShow}><AddIcon /></Button>

        }

      </Container>
    )
}
