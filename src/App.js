import './App.css';
import React, { useState, useMemo, useEffect } from 'react';
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
  // Get system preference for dark mode
  const getSystemDarkMode = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [darkMode, setDarkMode] = useState(getSystemDarkMode);

  // Optional: update theme on system change
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

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
      {/* Toggle button still available if you want manual control */}
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
