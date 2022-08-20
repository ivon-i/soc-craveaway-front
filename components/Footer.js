import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#34393C"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} sx={{ fontWeight: '500' }}>
                Company
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  About us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} sx={{ fontWeight: '500' }}>
                Account
              </Box>
              <Box>
                <Link href="/api/auth/login" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/api/auth/login" color="inherit">
                  Sign up
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} sx={{ fontWeight: '500' }}>
                Policies
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Terms & Conditions
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Usage Policy
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Craveaway &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
