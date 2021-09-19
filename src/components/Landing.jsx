import React from 'react'
import PhoneList from './PhoneList'
import AddPhone from './AddPhone'
import OpenModal from './OpenModal'

const homeLayout = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const Landing = ({ phones }) => (
  <div style={homeLayout}>
    {
      phones.length ? (
        <PhoneList phones={ phones } />
      ) : (
        <div>No Phones in Store</div>
      )
    }
    <AddPhone />
    <OpenModal />
  </div>
)

export default Landing