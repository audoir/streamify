"use client";

//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Theme for Streamify
//-----------------------------------------------------------------------------

import { Roboto } from 'next/font/google';
import { IconButton, Select, createTheme, styled } from "@mui/material";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const streamifyTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFBE96',
    },
    secondary: {
      main: '#A4FF96',
    },
    background: {
      default: '#101010',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.black,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main
  },
}));
