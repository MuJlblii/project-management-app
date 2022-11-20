import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState, useContext } from 'react';

import { Context } from './Context';
import { createBoard, decode } from './LocalApi';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [establishTitle, setEstablishTitle] = useState('');
  const [establishDescription, setEstablishDescription] = useState('');
  return (
    <div>
      <Button onClick={handleOpen}>Create User</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <input
              onChange={(e) => {
                setEstablishTitle(e.target.value);
              }}
              type='text'
              placeholder='Title'
              value={establishTitle}
            />
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <input
              onChange={(e) => {
                setEstablishDescription(e.target.value);
              }}
              type='text'
              placeholder='Description'
              value={establishDescription}
            />
          </Typography>
          <button
            className='search_window'
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              void createBoard({
                title: establishTitle,
                owner: decode() as string,
                users: [establishDescription],
              });
            }}
          >
            Поиск
          </button>
        </Box>
      </Modal>
    </div>
  );
}
