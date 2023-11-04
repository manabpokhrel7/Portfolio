import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import UnstyledTextareaIntroduction from './TextAreaAutosize';
import './Contact.css';
import UnstyledButtonCustom from './SubmitButton';

export default function InputWithIcon() {
  const inputStyle = {
    height: '100%', // Adjust the height as needed
  };

  return (
    <div className='foot'>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            First Name
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            style={inputStyle} // Apply the height style
          />
        </FormControl>
        <TextField
          id="input-with-icon-textfield"
          label="Last Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
          style={inputStyle} // Apply the height style
        />
        <br></br>
        <TextField
          id="input-with-icon-textfield"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          style={inputStyle} // Apply the height style
        />
        <br></br>
        <UnstyledTextareaIntroduction style={inputStyle} /> {/* Apply the height style to the textarea */}
        <br></br>
        <UnstyledButtonCustom />
      </Box>
    </div>
  );
}
