import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

interface IProps {
  isMobile?: boolean
}

const Notifications = ({isMobile}: IProps) => (
  isMobile ?
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem> :
    <IconButton
      size="large"
      aria-label="show new notifications"
      color="inherit"
    >
      <Badge badgeContent={17} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
)

export default Notifications;
