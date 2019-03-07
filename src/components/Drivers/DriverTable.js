import React, {Component}from 'react';
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DriverBuilder from './DriverBuilder'
import DriverItem from '../Drivers/DriverItem'
import Notification from '../Shared/Notification'
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../constants'
import { acAddDriver, acRemoveDriver } from '../../actions';
const styles = {
  textAlign: 'center',
  magrin: '40px'
}
class DriverTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      driver: {
        driverId: '',
        name: '',
        address: ''
      },
      mode: '',
      errorMessage: '',
      successMessage: ''
    };
  }

  handleSubmit = () => {
    const { mode, driver } = this.state
    const { drivers, addDriver, removeDiver } = this.props
    switch (mode) {
      case 'New':
        let isExisted = drivers.some(item => item.driverId === driver.driverId)
        if (isExisted) {
          let errorMessage = ERROR_MESSAGE.NEW
          this.setState({ open: false, errorMessage, successMessage: ''})
        } else {
          let successMessage = SUCCESS_MESSAGE.NEW
          addDriver(driver)
          this.setState({ open: false, errorMessage: '', successMessage })
        }
        break
      case 'Remove':
        let isNotFound = drivers.every(item => item.driverId !== driver.driverId)
        if (isNotFound) {
          let errorMessage = ERROR_MESSAGE.REMOVE
          this.setState({ open: false, errorMessage, successMessage: '' })
        } else {
          let successMessage = SUCCESS_MESSAGE.REMOVE
          removeDiver(driver.driverId)
          this.setState({ open: false, errorMessage: '', successMessage })
        }
        break
      case 'Edit':
        let successMessage = SUCCESS_MESSAGE.EDIT
        
        break
      default:
        break
    }
  }

  handleChange = name => ({ target: { value }}) => {
    let valueOfName = name === 'driverId' ? +value : value
    this.setState({
      driver: {
        ...this.state.driver,
        [name]: valueOfName
      }
    })
  }

  handleClickOpen = (mode, driver) => {
    this.setState({ 
      open: true, 
      mode, 
      driver: {...driver} || {}
    });
  };

  handleClose = () => {
    this.setState({ 
      open: false, 
      errorMessage: '', 
      successMessage: '', 
      driver: {
        driverId: '',
        name: '',
        address: ''
      },
      mode: ''
    });
  }

  render () {
    const { drivers } = this.props
    const { errorMessage, successMessage, open, mode, driver } = this.state
    console.log('this.props', this.props)
    return (
      <React.Fragment>
        <h1 style={styles}>List Driver Of Logivan</h1>
        <div style={{ display: 'flex' }}>
          <DriverBuilder 
            mode={mode} 
            open={open}
            driver={driver}
            handleClickOpen={this.handleClickOpen}
            handleClose={this.handleClose}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
          <Notification 
            open={errorMessage !== '' || successMessage !== ''} 
            handleClose={this.handleClose} 
            type={errorMessage !== '' ? 'error' : 'success'}
            message={errorMessage !== '' ? errorMessage : successMessage} />
        </div>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell align="justify">Driver ID</TableCell>
              <TableCell align="justify">Name</TableCell>
              <TableCell align="justify">Address</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drivers.map((item, index) => <DriverItem onClick={this.handleClickOpen} driver={item} key={index}/>)}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
  
}

const mapStateToProps = state => ({
  drivers: state.drivers
})
const mapDispatchToProps = dispatch => ({
  addDriver: (driver) => dispatch(acAddDriver(driver)),
  removeDiver: (driverId) => dispatch(acRemoveDriver(driverId))
})
export default connect(mapStateToProps, mapDispatchToProps)(DriverTable);