import { Button, Typography } from '@mui/material';

import CustomizedPopup from './styles';

interface Props {
  open: boolean;
  onSuccess: () => void;
  onClosePopup: () => void;
}

const Popup: React.FC<Props> = ({ open, onSuccess, onClosePopup }) => (
  <CustomizedPopup open={open} onClose={onClosePopup}>
    <div className="content">
      <Typography variant="body1">
        Are you sure you want to delete it?
      </Typography>
      <div className="button-wrapper">
        <Button variant="contained" onClick={onSuccess}>
          Yes
        </Button>
        <Button variant="contained" color="error" onClick={onClosePopup}>
          No
        </Button>
      </div>
    </div>
  </CustomizedPopup>
);

export default Popup;

