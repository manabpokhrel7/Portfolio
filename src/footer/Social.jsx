import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: 'inherit', // Inherit the color from the parent element
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Find me on Social Medias
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={linkStyle}>
            <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '5px' }} /> Facebook
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={linkStyle}>
            <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '5px' }} /> Instagram
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" style={linkStyle}>
            <FontAwesomeIcon icon={faTiktok} style={{ marginRight: '5px' }} /> TikTok
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
