import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ width: '100%', maxWidth: '1449px' }}>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: { xs: '100%', md: '30%' },
            paddingLeft: '80px',
            paddingTop: '20px',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)' }}>
            Quick Links
          </Typography>
          <Link href="/about-us"  sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', textDecoration: 'none', '&:hover': { color: 'rgba(183, 153, 91, 1)', textDecoration: 'none' }  }}>About Us</Link>
          <Link href="#"  sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', textDecoration: 'none', '&:hover': { color: 'rgba(183, 153, 91, 1)', textDecoration: 'none' }  }}>Terms & Conditions</Link>
          <Link href="https://maps.app.goo.gl/hgNDHg4Utkv9QpNAA" target="_blank" sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', textDecoration: 'none', '&:hover': { color: 'rgba(183, 153, 91, 1)', textDecoration: 'none' }  }}>Our Location</Link>
          <Link href="/contact"  sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', textDecoration: 'none', '&:hover': { color: 'rgba(183, 153, 91, 1)', textDecoration: 'none' }  }}>Contact Us</Link>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: { xs: '100%', md: '30%' },
            marginBottom: { xs: '20px', md: '0' },
            padding: '20px'
          }}
        >
          <Stack direction="column" spacing={1} sx={{ marginTop: '20px' }}>
            <Typography variant="h6" component="div" sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', marginLeft: '20px', marginTop: '15px' }}>
              Operating Hours
            </Typography>
          </Stack>
          <Stack direction="column" spacing={-1} sx={{ marginTop: '20px' }}>
            <Typography variant="body1" sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', marginLeft: '20px' }}>
              MON - SAT - 8AM TO 6PM
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', marginLeft: '20px' }}>
              SUN - 8AM TO 2PM
            </Typography>
          </Stack>
          <Stack direction="column" spacing={-1} sx={{ marginTop: '20px' }}>
            <Typography variant="body1" sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', marginLeft: '20px' }}>
              Telephone: +94 11 254 5700
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', marginLeft: '20px' }}>
              Reservations: +94 11 450 9400
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', marginLeft: '20px' }}>
              WhatsApp: +94 71 470 9400
            </Typography>
          </Stack>
          <Stack direction="column" spacing={1} sx={{ marginTop: '20px' }}>
            <Typography variant="body1" sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', marginLeft: '20px', marginTop: '20px' }}>
              Email: reservations@hotelceylon.com
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: { xs: '100%', md: '30%' },
            marginBottom: { xs: '20px', md: '0' },
            padding: '20px'
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontFamily: 'Marcellus, serif', color: 'rgba(255, 255, 255, 1)', textAlign: 'center', marginTop: '20px' }}>
            FIND US ON
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ marginTop: '40px' }}>
            <SocialMediaLinks href="https://www.facebook.com">
              <FacebookIcon style={{ color: "white" }} />
            </SocialMediaLinks>
            <SocialMediaLinks href="https://www.twitter.com">
              <TwitterIcon style={{ color: "white" }} />
            </SocialMediaLinks>
            <SocialMediaLinks href="https://www.instagram.com">
              <InstagramIcon style={{ color: "white" }} />
            </SocialMediaLinks>
          </Stack>
        </Stack>
      </Stack>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #000;
  padding: 37px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0px;
  }

  @media (max-width: 480px) {
    padding: 0px;
  }
`;

const SocialMediaLinks = styled.a`
  font-family: "Marcellus", serif;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  text-decoration: none;
  display: inline-block; /* Required for transform to work properly */
  transition: transform 0.3s ease; /* Smooth transition */
  &:hover {
    transform: scale(1.2); /* Zoom in effect */
  }

`;


export default Footer;
