import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});
const ButtonShared = ({ name, color, classes, onClick }) => (
  <Button variant="contained" color={color} onClick={onClick} className={classes.button}> {name} </Button>
)

ButtonShared.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonShared)