import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleModal } from '../store/actions'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'

const OpenModal = () => {
  const dispatch = useDispatch()
  const handleClick = () => dispatch(toggleModal(true))

  return (
    <div>
      <IconButton onClick={handleClick}>
        <AddIcon />
      </IconButton>
    </div>
  )
}

export default OpenModal