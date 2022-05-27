import React from 'react';
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuItem from "@mui/material/MenuItem";
import {IconButton} from "@mui/material";

interface IProps {
  handleMenuClose?: () => void
}

const Profile = ({handleMenuClose}: IProps) => {
  return (
    <MenuItem onClick={handleMenuClose}>
      <IconButton size="large" aria-label="profile" color="inherit">
        <ManageAccountsIcon />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  );
}

export default Profile;
