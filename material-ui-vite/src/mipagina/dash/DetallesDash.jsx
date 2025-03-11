import React from 'react'
import { useParams } from 'react-router-dom';

export const DetallesDash = () => {

    let {id} = useParams();

  return (
    <div>DetallesDash <br />
        <h2>ID obtenida desde URL:{id}</h2>
    </div>

  )
}
