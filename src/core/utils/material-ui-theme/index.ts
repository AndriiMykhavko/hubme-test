import { createTheme } from '@mui/material';

const palette = {
  common: {
    white: '#fff',
    black: '#000',
  },
  primary: {
    main: '#5DCB43',
  },
  error: {
    main: '#F33A3D',
    light: '#FF9FA3',
  },
  custom: {
    main: '#F3F3F3',
    light: '#F2EDED',
    dark: '#C4C4C4',
  },
};

const theme = createTheme({
  palette,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            height: '100%',
            boxSizing: 'border-box',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          font: '14px Roboto, sans-serif',
          '&.crossed': {
            textDecoration: 'line-through',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '43px',
          input: {
            font: '14px Roboto, sans-serif',
          },
          '& fieldset': {
            borderColor: palette.custom.light,
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: '1px',
            },
          },
          '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: palette.error.light,
              borderWidth: '1px',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          '&.MuiFormLabel-filled, &.Mui-focused': {
            textTransform: 'uppercase',
            paddingLeft: '4px',
            fontSize: '10px',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: '6px 0 0',
          font: '11px Roboto, sans-serif',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          font: '14px Roboto, sans-serif',
          textTransform: 'initial',
          padding: '12px',
          height: '43px',
          color: palette.common.white,

          svg: {
            marginRight: '5px',
            height: '16px',
            width: '16px',
            fill: palette.primary.main,
          },
        },
        outlined: {
          color: palette.common.black,
          borderColor: palette.custom.light,
          '&.active': {
            color: palette.common.white,
            backgroundColor: palette.primary.main,
            borderColor: palette.primary.main,

            svg: {
              marginRight: '5px',
              height: '16px',
              width: '16px',
              fill: palette.custom.light,
            },
          },
          '&.outlineGreen': {
            color: palette.primary.main,
            borderColor: palette.primary.main,
          },
          ':hover': {
            backgroundColor: '#5DCB42',
            color: '#fff',
            borderColor: '#5DCB42',
            svg: {
              fill: '#fff',
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: palette.custom.dark,
          height: '16px',
          width: '16px',
          padding: '0',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.MuiContainer-maxWidthSm': {
            maxWidth: '535px',
          },
        },
      },
    },
  },
});

export default theme;

