import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ sm: 5 }}
        py={{ sm: 5 }}
        bgcolor="#34393C"
        color="white"
      >
        <Container maxWidth="lg">
          <Box textAlign="center">
            Craveaway &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
