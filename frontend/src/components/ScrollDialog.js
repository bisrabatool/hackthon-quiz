import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import "./ScrollDialog.css";


export default function ScrollDialog({ title, content, children, buttonText }) {
  const [open, setOpen] = React.useState(false);

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>{buttonText}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
       
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }}
            ></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }}
            ></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}
            ></div>
          </div>
        </div>

        <DialogTitle
        className='bg-gradient-to-r from-cyan-600 to-green-600 inline-block text-transparent bg-clip-text'  id="scroll-dialog-title" 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
          }}
        >
          {title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {content}
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* If you want to add additional action buttons, you can do so here */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
