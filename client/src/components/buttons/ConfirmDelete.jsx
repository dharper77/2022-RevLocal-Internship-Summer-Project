import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Button
} from '@mui/material'

const ConfirmDelete = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        fullWidth
        id="delete"
        color="error"
        sx={{ marginTop: '3rem' }}
      >
        Delete Listing
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Disagree</Button>
          <Button onClick={() => setOpen(false)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ConfirmDelete
