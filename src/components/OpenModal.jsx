import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleModal } from '../store/actions'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'

const iconStyle = {
  fontSize: 48,
  border: '1px solid green',
  borderRadius: '50%'
}

const OpenModal = () => {
  const dispatch = useDispatch()
  const handleClick = () => dispatch(toggleModal(true))

  return (
    <div>
      <IconButton onClick={handleClick} size="large" color="success">
        <AddIcon style={iconStyle} />
      </IconButton>
    </div>
  )
}

export default OpenModal