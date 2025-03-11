import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

export const PageDash = () => {
  return (
    <div>PageDash
        <br />
        <Link to='/dash/23'>Click para ver mas detalles</Link><br />
        <Link to='/dash/43'>Click para ver mas detalles</Link><br />
        <Link to='/dash/32'>Click para ver mas detalles</Link><br />

        <Button LinkComponent={Link} to='/dash/45' variant="contained" color="success">
          Ver mas 
        </Button>

    </div>
  )
}
