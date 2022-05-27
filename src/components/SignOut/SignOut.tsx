import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AuthService from "../../services/AuthService";
import {useNavigate} from "react-router-dom";

interface IProps {
  handleMenuClose: () => void
}

const SignOut = ({handleMenuClose}: IProps) => {
  const navigate = useNavigate();

  const handleClick = async ()=>{
    await AuthService.logout();
    localStorage.removeItem('token');
    navigate('/login')
    handleMenuClose();
  }

  return (
    <MenuItem onClick={handleClick}>
      <IconButton size="large" aria-label="logout" color="inherit">
        <LogoutIcon />
      </IconButton>
      <p>Logout</p>
    </MenuItem>
  )
}

export default SignOut;
