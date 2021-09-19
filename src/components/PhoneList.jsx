import React from 'react';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {isMobile} from 'react-device-detect'

const PhoneList = ({ phones }) => {
  return (
    <ImageList sx={{ width: '100vw', height: '80vh'  }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Inventory</ListSubheader>
      </ImageListItem>
      {phones.map((item) => (
        <ImageListItem key={item.id} style={{ margin: isMobile ? '4px' : '4rem' }}>
          <img
            src={item.file}
            srcSet={item.file}
            alt={item.name}
            loading="lazy"
            style={{ borderRadius: '8px' }}
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.manufacturer}
            actionIcon={
              <Link to={ `/phone/${item.id}` } >
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.description}`}
                >
                  <InfoIcon color="success" />
                </IconButton>
              </Link>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default PhoneList