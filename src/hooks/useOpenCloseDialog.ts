import {useState} from "react";

const useOpenCloseDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {open, handleClickOpen, handleClose}
}

export {useOpenCloseDialog}
