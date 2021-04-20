import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, makeObservable } from 'mobx';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

const Notifier = observer(const Notifier = props => {
  const open = useRef(false);
  const variant = useRef(null);
  const message = useRef(null);
  const handleClose = useCallback(() => {
    if (reason === 'clickaway') {
      return;
    }

    open.current = false;
  });
  const update = useCallback(() => {
    variant.current = data.variant;
    message.current = data.message;
    open.current = true;
  });
  const renderIcon = useCallback(() => {
    if (!variant.current) {
      return;
    }

    const {
      classes
    } = props;
    const Icon = variantIcon[this.variant];
    return <Icon className={classNames(classes.icon, classes.iconVariant)} />;
  });
  const {
    classes
  } = props;
  return <Snackbar anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right'
  }} open={open.current} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarContent className={classes[this.variant]} aria-describedby="client-snackbar" message={<span id="client-snackbar" className={classes.message}>
              {renderIcon()}
              {message.current}
            </span>} action={[<IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>]} />
      </Snackbar>;
};);

Notifier.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Notifier);
