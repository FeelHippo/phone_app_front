import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePhone } from '../store/actions'
import { Link, Redirect } from 'react-router-dom';
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import Delete from '@mui/icons-material/Delete'

const PhoneCard = ({ phone }) => {
  const [redirect, setRedirect] = useState(false)
  const dispatch = useDispatch()
  const handleClick = id => {
    dispatch(deletePhone(id))
    setRedirect(true)
  }

  if (redirect) return ( <Redirect to='/' /> )
  return (
    <div>
      {
        phone?.id && (
          <div>
            <Link to={`/`}>
              <IconButton>
                <HomeIcon />
              </IconButton>
            </Link>
            <IconButton onClick={() => handleClick(phone.id)}>
              <Delete />
            </IconButton>
          </div>
        )
      }
    </div>
  )
}

export default PhoneCard