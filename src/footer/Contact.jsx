// Contact.jsx — Modern unified contact section
import React, { useState } from "react";
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

  return (
    <section id="contact" className="contact-section">
      <div className="contact-overlay"></div>

      <div className="contact-container">
        <Typography variant="h3" className="contact-title">
          Get in Touch
        </Typography>
        <Typography variant="body1" className="contact-subtitle">
          Have a project, collaboration, or just want to connect? Send me a
          message and I’ll get back to you soon.
        </Typography>

        <Grid container spacing={4} alignItems="flex-start">
          {/* Left side — info card */}
          <Grid item xs={12} md={5}>
            <Box className="info-card">
              <Typography variant="h6" className="info-title">
                Contact Information
              </Typography>

              <Box className="info-item">
                <LocationOnIcon sx={{ mr: 1, color: "#D70040" }} />
                Toronto, Canada
              </Box>

              <Box className="info-item">
                <EmailIcon sx={{ mr: 1, color: "#D70040" }} />
                <a href={`mailto:${email}`} className="info-link">
                  {email}
                </a>
              </Box>

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

          {/* Right side — contact form */}
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              className="contact-form"
            >
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

        {/* Says hello Success snackbar */}
        {state.succeeded && (
          <Snackbar
            open={!snackOpen}
            autoHideDuration={5000}
            onClose={() => setSnackOpen(true)}
          >
            <Alert
              severity="success"
              onClose={() => setSnackOpen(true)}
              variant="filled"
              sx={{ width: "100%" }}
            >
              Thank you! Your message has been sent.
            </Alert>
          </Snackbar>
        )}
      </div>
    </section>
  );
}
