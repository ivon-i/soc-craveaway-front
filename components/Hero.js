import { Container, Typography, Hidden, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddRecipeButton from './AddRecipeButton';
export const Hero = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: '630.33px',
            margin: '0 auto',
            textAlign: 'center',
            marginTop: {
              xs: '30px',
              sm: '40px',
              md: '60px',
              lg: '80px',
            },
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontWeight: 700,
              lineHeight: '1.2',
              fontSize: { xs: '2rem', sm: '3rem' },
            }}
          >
            Search & create healthy alternatives to fast food!
          </Typography>
          <Hidden smDown>
            <AddRecipeButton
              icon={<AddIcon sx={{ marginRight: '4px' }} />}
              sx={{
                marginTop: '40px',
                fontSize: '20px',
                padding: '8px 24px',
              }}
              text="Create Recipe"
            />
          </Hidden>
        </Box>
      </Container>
    </Box>
  );
};
