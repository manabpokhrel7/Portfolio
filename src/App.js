import './App.css';
import React, { useState, useMemo } from 'react';
import FixedBottomNavigation from './Mobnav';
import BackToTop from './ResponsiveAppBar';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Switch,
  FormControlLabel,
} from '@mui/material';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: '#D70040',
        },
        secondary: {
          main: '#FC6D26',
        },
      },
    }), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Dark Mode Toggle in top-right corner */}
      <Box sx={{ position: 'fixed', top: 10, right: 10, zIndex: 1300 }}>
        <FormControlLabel
          control={
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          }
          label="Dark Mode"
        />
      </Box>

      <div className="App">
        <BackToTop />
        <FixedBottomNavigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
