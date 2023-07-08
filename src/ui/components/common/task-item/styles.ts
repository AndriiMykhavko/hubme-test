import { styled } from '@mui/system';

const CustomizedTaskItem = styled('section')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '16px 1fr 40px',
  alignItems: 'center',
  columnGap: '8px',
  padding: '2px 2px 2px 10px',
  borderRadius: '4px',
  p: {
    maxWidth: '280px',
  },
  ':hover': {
    backgroundColor: theme.palette.custom.main,
    '.hideOnHover': {
      display: 'none',
    },
    '.displayOnHover': {
      display: 'block',
      svg: {
        color: theme.palette.error.main,
      },
    },
  },
  '.hideOnHover': {
    svg: {
      color: theme.palette.custom.dark,
    },
  },
  '.displayOnHover': {
    display: 'none',
  },
}));

export default CustomizedTaskItem;

