import { styled } from '@mui/system';

const CustomizedAddTask = styled('form')(({ theme }) => ({
  display: 'grid',
  alignItems: 'start',
  columnGap: '10px',
  gridTemplateColumns: '1fr 120px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'initial',
    rowGap: '10px',
  },
}));

export default CustomizedAddTask;

