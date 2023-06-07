import { AppBar, Avatar, Box } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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

export const BoxStyle = styled(Box)({
  flexGrow: 1,
});

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

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'static',
  margin: "15px 0",
  backgroundColor: 'rgb(33, 33, 33)',
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    margin: 0,
  },
}));

export const ToolbarWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const IconButtonWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: "24px",
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const MenuWrapper = styled('div')(({ theme }) => ({
  '& .MuiAvatar-root': {
    width: 32,
    height: 32,
    ml: -0.5,
    mr: 1,
  },
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: 'background.paper',
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 0,
  },
}));