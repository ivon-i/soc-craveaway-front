import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/joy/Typography';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: '20px',
          margin: '0',
          background: '',
          position: 'fixed',
          top: '15%',
          left: '50%',
          mr: '-50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          display: 'inline-block',
        }}
      >
        About Us
      </Typography>
      <Typography
        sx={{
          lineHeight: 1.6,
          fontSize: 20,
          position: 'fixed',
          top: '46%',
          left: '42%',
          mr: '-50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '0px',
          width: ' 80%',
          display: 'inline-block',
          whiteSpace: 'pre-line',
        }}
        variant=""
        placeholder=""
        m="50px"
      >
        Welcome to <strong>CraveAway!</strong>
        <br />
        <br />
        We are a <em>user-centered </em> recipe platform.
        <br />
        <br />
        Here are CraveAway we believe that delicious food is for everyone,
        regardless of their dietry requirements.
        <br />
        <br />
        CraveAway provides delicious, healthy recipes for all the foods you
        crave.
        <br />
        <br />
        <br />
        <br />
        <em>
          Sign up today and gain access to all our delicious, healthy recipes!
        </em>
      </Typography>

      <Link href="/api/auth/login" passHref>
        <button variant="outlined" className="fixedAboutUsButton">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default AboutUs;
