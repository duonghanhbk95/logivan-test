import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '../Shared/Button'

const DriverBuilder = (props) => {
  const { mode, driver, handleClickOpen, open, handleClose, handleSubmit, handleChange } = props
  return (
    <div>
      <Button color="primary" name='New' onClick={() => handleClickOpen('New')}>
        Add New
      </Button>
      <Button name='Remove' color='secondary' onClick={() => handleClickOpen('Remove')}>
        Remove
      </Button>
      <Dialog
        maxWidth='md'
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send
            updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin='normal'
            type='number'
            label='Driver ID'
            disabled={mode === 'Edit'}
            onChange={handleChange('driverId')}
            value={driver.driverId}
            placeholder='Driver ID is must number'
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          {
            mode !== 'Remove' &&
            <React.Fragment>
              <TextField
                margin="normal"
                label="Name"
                onChange={handleChange('name')}
                value={driver.name}
                fullWidth
              />
              <TextField
                margin="normal"
                label="Address"
                onChange={handleChange('address')}
                value={driver.address}
                fullWidth
              />
            </React.Fragment>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} name='Cancel' color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} name='Submit' color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DriverBuilder
