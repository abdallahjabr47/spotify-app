import React from 'react'
import './Sidebar.css';
import { routes } from '../../Utils/Utils';
import { Box } from '@mui/material';
import { useDataLayerValue } from '../../Logic/DataLayer';
import SidebarOption from '../SidebarOption/SidebarOption';
import Playlists from '../Playlists/Playlists';
import Title from "../Sidebar/Title/Title";
import { styled } from '@mui/system';

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


const Container = styled('div')`
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
`;