// Port.jsx
import React from "react";
import "./Port.css";
import WebsitePreview from "./WebsitePreview";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Port = () => {
  return (
    <Box
      id="portfolio"
      sx={{
        py: 10,
        background: "transparent",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            letterSpacing: "0.5px",
          }}
        >
          Featured Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            opacity: 0.8,
            maxWidth: 700,
            mx: "auto",
            mb: 6,
            lineHeight: 1.6,
          }}
        >
          A selection of DevOps and Cloud Infrastructure projects showcasing
          automation, CI/CD, and Infrastructure as Code principles across AWS,
          Azure, and GCP.
        </Typography>
      </motion.div>

      <Box className="prev">
        <WebsitePreview />
      </Box>
    </Box>
  );
};

export default Port;
