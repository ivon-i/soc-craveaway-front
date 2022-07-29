import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateRecipeButton = ({ text }) => {
  return (
    <div
      //   mt="30px"
      //   width="100%"
      //   height="80px"
      //   sx={{ position: 'fixed', bottom: 0, left: 0, p: '24px' }}
      //   backgroundColor="white"
      className="fixedButtonDiv"
    >
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
    </div>
  );
};

export default CreateRecipeButton;
