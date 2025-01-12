import React from "react";
import { Button, Grid, Typography, Box, Link } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Twitter,
} from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", paddingTop: 40 }}>
      {/* Newsletter Section */}
      <Box py={6} px={4} mb={6} borderRadius={2} boxShadow={3}>
        <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
          Newsletter
        </Typography>
        <Typography variant="body1" mb={3} align="center">
          Stay up to date with the latest news from the world of Ferrari.
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000", // Use black background
              "&:hover": {
                backgroundColor: "#333", // Dark gray on hover
              },
            }}
            size="large"
          >
            Subscribe
          </Button>
        </Box>
      </Box>

      {/* Content Section */}
      <Grid container spacing={4} justifyContent="space-between" px={4}>
        {/* Racing Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" color="white" gutterBottom>
            Racing
          </Typography>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Scuderia Ferrari HP",
              "Hypercar",
              "GT Series",
              "Esports",
              "Driver Academy",
              "Member",
            ].map((item, index) => (
              <li key={index}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ "&:hover": { color: "white" } }}
                >
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </Grid>

        {/* Ferrari Products Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" color="white" gutterBottom>
            Ferrari Products
          </Typography>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Sports Cars",
              "Range",
              "Configure your Ferrari",
              "MyFerrari",
              "Pre-owned",
              "Dealers",
            ].map((item, index) => (
              <li key={index}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ "&:hover": { color: "white" } }}
                >
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </Grid>

        {/* Ferrari Experiences Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" color="white" gutterBottom>
            Experiences
          </Typography>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Ferrari Museums",
              "Ferrari World Abu Dhabi",
              "Ferrari Land Barcelona",
              "Ristorante Cavallino",
              "Corse Clienti",
              "Ferrari Esports Series",
            ].map((item, index) => (
              <li key={index}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ "&:hover": { color: "white" } }}
                >
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </Grid>

        {/* Social & Legal Sections */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" color="white" gutterBottom>
            Follow Us
          </Typography>
          <Box display="flex" gap={2} mb={4}>
            {[Facebook, Instagram, LinkedIn, FaTiktok, YouTube, Twitter].map(
              (Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  color="inherit"
                  sx={{
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "transform 0.3s ease",
                      color: "red",
                    },
                  }}
                >
                  <Icon fontSize="large" />
                </Link>
              )
            )}
          </Box>

          <Typography variant="h6" color="white" gutterBottom>
            Legal
          </Typography>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Privacy Policy",
              "Cookie Policy",
              "Accessibility",
              "Submit your privacy request",
              "Responsible Disclosure",
              "Reward Anticounterfeiting",
            ].map((item, index) => (
              <li key={index}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ "&:hover": { color: "white" } }}
                >
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>

      {/* Copyright and Company Info */}
      <Box textAlign="center" py={6} bgcolor="#000" mt={4}>
        <Typography variant="body2" color="textSecondary">
          Ferrari N.V. - Holding company - A company under Dutch law, having its
          official seat in Amsterdam, the Netherlands, and its corporate address
          at Via Abetone Inferiore No. 4, I-41053 Maranello (MO), Italy,
          registered with the Dutch trade register under number 64060977
        </Typography>
        <Typography variant="body2" color="textSecondary" mt={2}>
          Ferrari S.p.A. - A company under Italian law, having its registered
          office at Via Emilia Est No. 1163, Modena, Italy, Companies’ Register
          of Modena, VAT and Tax number 00159560366 and share capital of Euro
          20,260,000
        </Typography>
        <Typography variant="body2" color="textSecondary" mt={2}>
          Copyright 2025 - All rights reserved
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
