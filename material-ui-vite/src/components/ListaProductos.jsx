import React, {useState} from 'react'
import Switch from '@mui/material/Switch'
import { Typography } from '@mui/material'

const ListaProductos = () => {
    const [home, setHome]=useState(false)

    const changestate = ()=> {
        setHome(!home)
        console.log('Tu switch esta: ', home  )
    }  

  return (
    <div>

        <Switch
          value={home}
          checked={home}
          onChange={changestate}
          inputProps={{ "aria-label": '' }}
          
        />

        {
            <Typography variant={home ? "h3":"h6"} color={home ? "success":"error"}>{home ? "Encendido":"Apagado"}</Typography>
        }

    </div>
  )
}

export default ListaProductos