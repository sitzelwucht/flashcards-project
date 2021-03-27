import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { useCards } from '../contexts/CardProvider'


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      margin: 'auto',
      width: 400,
      height: 400,
    //   backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function ModalComponent() {

    const classes = useStyles()
    const { cards, editCard } = useCards()
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleEdit = (elem) => {
      editCard(elem.question, cards, )
  }

    return (
        <>
        <Button onClick={handleOpenModal}><EditIcon /></Button>
            <Modal 
            className={classes.paper}
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
               <form style={{display: 'flex', flexDirection: 'column', background: 'white'}}>
               <TextField value="kjlkjlkj" />
               <TextField />
               <Button type="submit" onClick={() => handleEdit()}>Save</Button>
               </form> 
            </Modal>
        </>
    )
}
