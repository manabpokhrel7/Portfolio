import './App.css';
import React, { useState, useMemo } from 'react';
import FixedBottomNavigation from './Mobnav';
import BackToTop from './ResponsiveAppBar';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Button,
} from '@mui/material';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Dark mode is default

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

      {/* Dark Mode Toggle Button in top-right corner */}
      <Box sx={{ position: 'fixed', top: 10, right: 10, zIndex: 1300 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Dark Mode: ON' : 'Dark Mode: OFF'}
        </Button>
      </Box>

      <div className="App">
        <BackToTop />
        <FixedBottomNavigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
