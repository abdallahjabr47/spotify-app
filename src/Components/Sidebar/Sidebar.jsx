import React from 'react'
import './Sidebar.css';
import { routes } from '../../Utils/Utils';
import { Box, Container } from '@mui/material';
import { useDataLayerValue } from '../../Logic/DataLayer';
import SidebarOption from '../SidebarOption/SidebarOption';
import Playlists from '../Playlists/Playlists';
import Title from "../Sidebar/Title/Title";


const Sidebar = ({ activeTab }) => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <Container className='sidebar'>

      <img className="sidebarLogo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify logo"></img>
        
      {routes.map((route, idx) => 
        <SidebarOption 
          key={idx} 
          Icon={route.icon} 
          option={route.title} 
          path={route.path} 
          activeTab={activeTab} 
          /> 
          )
      }

        <Box className='sidebarTitle'>
            <Title Title="PLAYLISTS" />
        </Box>

      <Playlists />
      
    </Container>
  );
};

export default Sidebar;