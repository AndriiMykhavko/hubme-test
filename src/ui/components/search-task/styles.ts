import { styled } from '@mui/system';

const CustomizedSearchTask = styled('section')(({ theme }) => ({
  display: 'grid',
  columnGap: '10px',
  gridTemplateColumns: '1fr 87px 78px',
  margin: '20px 0 16px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'initial',
    rowGap: '10px',
  },
}));

export default CustomizedSearchTask;

