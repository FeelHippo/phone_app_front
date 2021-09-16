import React from 'react'
import Phone from './Phone'
import AddPhone from './AddPhone'
import OpenModal from './OpenModal'

const Landing = ({ phones }) => (
  <div>
    {
      phones.length ? (
        phones.map(phone => (
          <Phone key={ phone.id } phone={ phone } />
        ))
      ) : (
        <div>Nothing Yet</div>
      )
    }
    <AddPhone />
    <OpenModal />
  </div>
)

export default Landing