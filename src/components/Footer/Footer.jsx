import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Stack 
        direction={{ xs: "column", md: "row" }} 
        justifyContent="center" 
        alignItems={{ xs: "flex-start", md: "center" }} 
        spacing={{ xs: 0, md: 15 }}   
        sx={{ width: '100%', maxWidth: '1449px', padding: { xs: "20px", md: "20px 20px 20px 20px" } }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: { xs: '100%', md: '30%' },
            paddingLeft: { xs: "20px", md: '80px' },
            paddingTop: { xs: '0', md: '20px' },
          }}
        >
          <Typography variant="h6" component="div" sx={titleStyle}>
            Quick Links
          </Typography>
          {quickLinks.map((link) => (
            <StyledLink key={link.href} href={link.href} target={link.target} sx= {{color: 'gold'}}>
              {link.text}
            </StyledLink>
          ))}
        </Stack>

        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: { xs: '100%', md: '30%' },
            padding: { xs: '20px', md: '20px' },
          }}
        >
          <Typography variant="h6" component="div" sx={{ ...titleStyle, marginTop: "15px" }}>
            Operating Hours
          </Typography>
          <Stack direction="column" spacing={1} sx={{ marginTop: '20px' }}>
            {operatingHours.map((time) => (
              <Typography key={time} variant="body1" sx={textStyle}>
                {time}
              </Typography>
            ))}
          </Stack>
          <Stack direction="column" spacing={1} sx={{ marginTop: '20px' }}>
            {contactInfo.map((info) => (
              <Typography key={info} variant="body1" sx={textStyle}>
                {info}
              </Typography>
            ))}
          </Stack>
          <Stack direction="row" spacing={1} sx={{ marginTop: '20px', marginLeft: '20px' }}>
            <Typography variant="body2" sx={textStyle}>
              Email:
            </Typography>
            <StyledLink href="mailto:reservations@hotelceylon.com" sx= {{color: 'gold'}}>
              reservations@hotelceylon.com
            </StyledLink>
          </Stack>
        </Stack>

        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: { xs: '100%', md: '30%' },
            padding: { xs: '20px', md: '20px' },
          }}
        >
          <Typography variant="h6" component="div" sx={{ ...titleStyle, marginTop: '20px' }}>
            FIND US ON
          </Typography>
          <Stack 
            direction="row" 
            justifyContent={{ xs: "flex-start" }} 
            alignItems="center" 
            spacing={2} 
            sx={{ marginTop: '40px' }}
          >
            {socialMediaLinks.map(({ href, Icon, label }) => (
              <SocialMediaLinks key={href} href={href} aria-label={label}>
                <Icon style={{ color: "white" }} />
              </SocialMediaLinks>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </FooterContainer>
  );
};

// Data
const quickLinks = [
  { text: 'About Us', href: '/about-us' },
  { text: 'Terms & Conditions', href: '#' },
  { text: 'Our Location', href: 'https://maps.app.goo.gl/hgNDHg4Utkv9QpNAA', target: '_blank' },
  { text: 'Contact Us', href: '/contact' },
];

const operatingHours = [
  'MON - SAT - 8AM TO 6PM',
  'SUN - 8AM TO 2PM',
];

const contactInfo = [
  'Telephone: +94 11 254 5700',
  'Reservations: +94 11 450 9400',
  'WhatsApp: +94 71 470 9400',
];

const socialMediaLinks = [
  { href: "https://www.facebook.com", Icon: FacebookIcon, label: "facebook" },
  { href: "https://www.twitter.com", Icon: TwitterIcon, label: "twitter" },
  { href: "https://www.instagram.com", Icon: InstagramIcon, label: "instagram" },
];

// Styles
const FooterContainer = styled.div`
  background-color: #000;
  width: 100%;
  overflow-x: hidden;
  padding: 1% 15%;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const SocialMediaLinks = styled.a`
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const titleStyle = {
  fontFamily: 'Marcellus, serif',
  color: 'rgba(255, 255, 255, 1)',
};

const textStyle = {
  fontFamily: 'Marcellus, serif',
  color: 'rgba(255, 255, 255, 1)',
  marginLeft: '20px',
};

const StyledLink = styled(Link)`
  font-family: 'Marcellus, serif';
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  &:hover {
    color: rgba(183, 153, 91, 1);
    text-decoration: none;
  }
`;

export default Footer;
