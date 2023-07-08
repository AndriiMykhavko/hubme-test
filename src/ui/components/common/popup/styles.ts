import { styled } from '@mui/system';
import Dialog from '@mui/material/Dialog';

const CustomizedPopup = styled(Dialog)(() => ({
  '.content': {
    padding: '20px',
  },
  '.button-wrapper': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '10px',
    marginTop: '16px',
  },
}));

export default CustomizedPopup;

