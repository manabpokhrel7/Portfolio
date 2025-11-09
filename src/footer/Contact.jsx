// Contact.jsx — Theme-Adaptive, Transparent Background
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
  useTheme,
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
  const theme = useTheme();
  const email = "manabpokhrel7@gmail.com";

  // Silence ResizeObserver warnings
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
          {/* Contact Info Card */}
          <Grid item xs={12} md={5}>
            <Box
              className="info-card"
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark" ? "#1E1E1E" : "#f5f5f5",
              }}
            >
              <Typography variant="h6" className="info-title">
                Contact Information
              </Typography>

              <Divider sx={{ mb: 2, borderColor: "rgba(0,0,0,0.1)" }} />

              <Box className="info-item">
                <LocationOnIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="body2">Toronto, Canada</Typography>
              </Box>

              <Box className="info-item">
                <EmailIcon sx={{ mr: 1, color: "#D70040" }} />
                <a href={`mailto:${email}`} className="info-link">
                  {email}
                </a>
              </Box>

              <Typography variant="body2" className="info-note">
                I’m always open to discussing new opportunities, creative projects,
                or collaborations in DevOps, Cloud, and Infrastructure.
              </Typography>

              <Box className="social-icons">
                <Tooltip title="LinkedIn">
                  <IconButton
                    href="https://www.linkedin.com/in/manab-pokhrel/"
                    target="_blank"
                    sx={{ color: theme.palette.text.primary }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="GitHub">
                  <IconButton
                    href="https://github.com/manabpokhrel7"
                    target="_blank"
                    sx={{ color: theme.palette.text.primary }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Facebook">
                  <IconButton
                    href="https://www.facebook.com/red.hood.3323/"
                    target="_blank"
                    sx={{ color: theme.palette.text.primary }}
                  >
                    <FacebookIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              className="contact-form"
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark" ? "#1E1E1E" : "#f5f5f5",
              }}
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
                  sx={{
                    borderRadius: "50px",
                    padding: "0.7rem 2.5rem",
                    backgroundColor: "#D70040",
                    "&:hover": { backgroundColor: "#b10435" },
                  }}
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
