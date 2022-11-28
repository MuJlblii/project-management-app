import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

import { types } from '.';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ConfirmationModal = ({ handleClose, handleConfirm, openModalConfirm, text }: types.ConfirmationModalProps) => (
  <Dialog
    open={openModalConfirm}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby='alert-dialog-slide-description'
  >
    <DialogTitle>{'Please, confirm'}</DialogTitle>
    <DialogContent>
      <DialogContentText id='alert-dialog-slide-description'>{text}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Disagree</Button>
      <Button onClick={handleConfirm}>Agree</Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmationModal;