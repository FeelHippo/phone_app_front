import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePhone } from '../store/actions'
import { Link, Redirect } from 'react-router-dom';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import Delete from '@mui/icons-material/Delete'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress'
import {isMobile} from 'react-device-detect'

const componentCss = {
  iconCss: {
    fontSize: 48,
  },
  contentCss: {
    titleCss: { justifyContent: 'space-between' },
    iconCss: { justifyContent: 'center', alignItems: 'start', marginTop: '16px' },
    typographyCss: { display: 'flex', alignItems: 'center' },
    spanCss: { fontSize: 48 },
    valueCss: { marginLeft: 48 },
    linkCss: { textDecoration: 'none' }
  }
}

const sxCss = {
  maxWidth: '100vw',
  height: 'auto',
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row'
}

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
        phone?.id ? (
          <div>
            <Card sx={sxCss}>
              <CardMedia
                component="img"
                height="auto"
                src={phone.file}
                alt={phone.imageFileName}
                sx={{
                  maxHeight: isMobile ? 'auto' : '100vh'
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ ...componentCss.contentCss.typographyCss, ...componentCss.contentCss.titleCss }}>
                  { `${phone.manufacturer} ${phone.name}` }
                  <IconButton onClick={() => handleClick(phone.id)} color="warning">
                    <Delete style={componentCss.iconCss} />
                  </IconButton>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  { phone.description }
                </Typography>
                <Typography variant="body1" color="text.secondary" style={componentCss.contentCss.typographyCss}>
                  <span style={componentCss.contentCss.spanCss}>💶</span><span style={componentCss.contentCss.valueCss}>{ phone.price }</span> 
                </Typography>
                <Typography variant="body1" color="text.secondary" style={componentCss.contentCss.typographyCss}>
                  <span style={componentCss.contentCss.spanCss}>💽</span><span style={componentCss.contentCss.valueCss}>{ `CPU: ${phone?.processor ?? 'no processor data :/'} - RAM: ${phone?.ram ?? 'no ram data :('}` }</span>
                </Typography>
              </CardContent>
              <CardActions style={{ ...componentCss.contentCss.typographyCss, ...componentCss.contentCss.iconCss }}>
                <Link to={`/`} style={componentCss.contentCss.linkCss}>
                  <Button type="submit" size="large" color="success" variant="contained" endIcon={<HomeIcon />}>
                    Home
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        ) : (
          <CircularProgress color="secondary" />
        )
      }
    </div>
  )
}

export default PhoneCard