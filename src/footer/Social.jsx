import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Box from '@mui/material/Box';

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
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant="outlined"
        >
          Find me on Social Platform
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
            <a
              href="https://www.facebook.com/red.hood.3323/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '5px' }} /> Facebook
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a
              href="https://github.com/manabpokhrel7"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: '5px' }} /> GitHub
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a
              href="https://www.linkedin.com/in/manab-pokhrel/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '5px' }} /> LinkedIn
            </a>
          </MenuItem>
        </Menu>
      </div>
    </Box>
  );
}
