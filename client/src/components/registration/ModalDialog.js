import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import RegistrationForm from '../RegistrationForm';

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      // form to be created
      <RegistrationForm/>
      <RegistrationForm handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;