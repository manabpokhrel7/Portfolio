// Contact.jsx — Final Minimal Grey Card Version
import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress,
  Tooltip,
  Divider,
} from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("maygkdzr");
  const [snackOpen, setSnackOpen] = useState(false);
  const email = "manabpokhrel7@gmail.com";

  // 🔇 Suppress ResizeObserver loop errors
  useEffect(() => {
    const suppress = (e) => {
      if (e.message?.includes("ResizeObserver loop")) e.stopImmediatePropagation();
    };
    window.addEventListener("error", suppress);
    return () => window.removeEventListener("error", suppress);
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <Typography variant="h3" className="contact-title fade-up">
          Get in Touch
        </Typography>

        <Grid
          container
          spacing={4}
          alignItems="stretch"
          justifyContent="center"
          className="fade-up-delayed"
        >
          {/* Left Info Card */}
          <Grid item xs={12} md={5}>
            <Box className="info-card">
              <Typography variant="h6" className="info-title">
                Contact Information
              </Typography>

              <Divider sx={{ mb: 2, borderColor: "rgba(0,0,0,0.1)" }} />

              <Box className="info-item">
                <LocationOnIcon sx={{ mr: 1, color: "#D70040" }} />
                <Typography variant="body2">Toronto, Canada</Typography>
              </Box>

              <Box className="info-item">
                <EmailIcon sx={{ mr: 1, color: "#D70040" }} />
                <a href={`mailto:${email}`} className="info-link">
                  {email}
                </a>
              </Box>

              <Typography variant="body2" className="info-note">
                I’m always open to discussing new opportunities, creative projects, or
                collaborations in DevOps, Cloud, and Infrastructure.
              </Typography>

              <Box className="social-icons">
                <Tooltip title="LinkedIn">
                  <IconButton
                    color="primary"
                    href="https://www.linkedin.com/in/manab-pokhrel/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="GitHub">
                  <IconButton
                    color="inherit"
                    href="https://github.com/manabpokhrel7"
                    target="_blank"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Facebook">
                  <IconButton
                    color="primary"
                    href="https://www.facebook.com/red.hood.3323/"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Grid>

          {/* Right Form */}
          <Grid item xs={12} md={7}>
            <Box component="form" onSubmit={handleSubmit} className="contact-form">
              <Typography variant="h6" className="form-title">
                Send a Message
              </Typography>

              <TextField
                label="Your Name"
                name="name"
                fullWidth
                variant="standard"
                required
              />
              <TextField
                label="Your Email"
                name="email"
                type="email"
                fullWidth
                variant="standard"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                variant="standard"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <Box textAlign="center" mt={3}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={state.submitting}
                  className="send-button"
                >
                  {state.submitting ? (
                    <>
                      <CircularProgress size={20} sx={{ mr: 1, color: "#fff" }} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {state.succeeded && (
          <Snackbar
            open={!snackOpen}
            autoHideDuration={5000}
            onClose={() => setSnackOpen(true)}
          >
            <Alert
              severity="success"
              variant="filled"
              onClose={() => setSnackOpen(true)}
              sx={{ width: "100%" }}
            >
              Thank you! Your message has been sent successfully.
            </Alert>
          </Snackbar>
        )}
      </div>
    </section>
  );
}
