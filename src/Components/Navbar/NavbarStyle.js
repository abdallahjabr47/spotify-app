<<<<<<< HEAD
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
=======
import { AppBar, Avatar, Box } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
>>>>>>> master

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

<<<<<<< HEAD
  
=======
  export const BoxStyle = styled(Box)({
    flexGrow: 1,
  });

  // export const AppBarStyle = styled(AppBar)({
  //   position: 'static',
  //   backgroundColor: 'rgb(91, 87, 115)',
  // });

  export const AvatarStyle = styled(Avatar)({
    width: 32, 
    height: 32,
  });

  export const LinkStyle = styled(Link)({
    color: 'inherit', 
    textDecoration: 'none', 
    display: 'flex', 
    alignItems: 'center',
  });

>>>>>>> master
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
<<<<<<< HEAD
  
=======

>>>>>>> master
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
<<<<<<< HEAD
      // vertical padding + font size from searchIcon
=======
>>>>>>> master
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));