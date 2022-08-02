import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const CreateRecipeButton = ({ text }) => {
  const { user, error, isLoading } = useUser();

    
    return (
    <div
      //   mt="30px"
      //   width="100%"
      //   height="80px"
      //   sx={{ position: 'fixed', bottom: 0, left: 0, p: '24px' }}
      //   backgroundColor="white"
      className="fixedButtonDiv"
      >
        {user ? (<Link href="/createrecipe" passHref>

          <button
            // variant="outlined"
            // sx={{
            //   position: 'fixed',
            //   bottom: 0,
            //   left: '50%',
            //   transform: 'translateX(-50%)',
            //   mb: '24px',
            //   width: '85%',
            //   color: 'black',
            //   borderColor: ' #FFA629',
            //   borderWidth: '2px',
            // }}
            className="fixedButton"
          >
            {text}
          </button>
        </Link> ): 
          (<Link href="/api/auth/login" passHref>
            <button
            // variant="outlined"
            // sx={{
            //   position: 'fixed',
            //   bottom: 0,
            //   left: '50%',
            //   transform: 'translateX(-50%)',
            //   mb: '24px',
            //   width: '85%',
            //   color: 'black',
            //   borderColor: ' #FFA629',
            //   borderWidth: '2px',
            // }}
            className="fixedButton"
          >
            {text}
          </button>
      </Link>)}
    </div>
  );
};

export default CreateRecipeButton;
