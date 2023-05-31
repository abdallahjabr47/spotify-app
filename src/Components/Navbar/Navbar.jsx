import React from 'react';
import './NavbarStyle.js';
import { useDataLayerValue } from '../../Logic/DataLayer.js';
import { reducerCases } from "../../Logic/Constants";
import { spotify } from "../../Logic/spotify";
import { BoxStyle, LinkStyle, Search, SearchIconWrapper, StyledInputBase } from './NavbarStyle.js';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { AppBar } from '@mui/material';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

function Navbar({ handlePrevious, handleNext }) {
  const navigate = useNavigate();
  const [dispatch] = useDataLayerValue();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch({
      type: 'SET_TOKEN',
      token: '',
    });
    handleClose();
    navigate('/login');
  };

  const handleSearch = async (query) => {
    try {
      const results = await spotify.search(query, ["song", "playlist", "album", "artist"], { limit: 10 });
      dispatch({ type: reducerCases.SET_SEARCH_RESULTS, searchResults: results });
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <BoxStyle>
      <AppBar position="static" sx={{ background: 'linear-gradient(rgb(33, 33, 33), rgb(33, 33, 33))', boxShadow: "none" }}>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
          </Search>

          <BoxStyle />

          <Box>
            <Tooltip title="Previous">
              <IconButton size="small" sx={{ mr: 2 }}>
                <ChevronLeft style={{ color: "white" }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Next">
              <IconButton size="small">
                <ChevronRight style={{ color: "white" }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
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
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <LinkStyle to={'/profile'}>
                <Avatar /> Profile
              </LinkStyle>
            </MenuItem>

            <Divider />
            <MenuItem onClick={handleClose}>
              <LinkStyle to={'/'}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </LinkStyle>
            </MenuItem>

            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </BoxStyle>
  );
}

export default Navbar;