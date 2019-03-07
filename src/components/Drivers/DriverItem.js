import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '../Shared/Button'

const DriverItem = ({ driver, onClick }) => {
  return (
    <TableRow key={driver.driverId}>
      <TableCell align="justify">{driver.driverId}</TableCell>
      <TableCell align="justify">{driver.name}</TableCell>
      <TableCell align="justify">{driver.address}</TableCell>
      <TableCell align="justify">
        <Button  name='Edit' onClick={() => onClick('Edit', driver)}/>
      </TableCell>
    </TableRow>
  ) 
}

export default DriverItem