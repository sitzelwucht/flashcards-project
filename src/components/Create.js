import React, { useState } from 'react'
import { Container, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

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

    const classes = useStyles()
    const [question, setQuestion] = useState()
    const [questionError, setQuestionError] = useState()
    const [answer, setAnswer] = useState()
    const [answerError, setAnswerError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuestionError(false)
        setAnswerError(false)

        if (!question) {
            setQuestionError(true)
        }
        if (!answer) {
            setAnswerError(true)
        }
    }


    return (
       <Container >

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

        </form>
       
      </Container>
    )
}
