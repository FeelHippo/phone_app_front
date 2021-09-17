import React from 'react';
import { Link } from 'react-router-dom';

const Phone = ({ phone }) => {
    return (
      <div>
        <Link to={ `/phone/${phone.id}` } >
          <div>{ phone.name }</div>
        </Link>
      </div>
    )
}

export default Phone