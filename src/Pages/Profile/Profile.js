import React, { useState } from 'react';
import Button from '@mui/material/Button';
import myImage from '../Profile/assets/jabr.jpg';
import { DarkModeToggle, InputField, NameTypography, ProfileAvatar, RootContainer, TableCellStyle, TableCellStyleData, TableContainerWrapper } from './ProfileStyle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import SEO from "../../Components/SEO/SEO";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('Abdallah Jabr');
  const [age, setAge] = useState(22);
  const [location, setLocation] = useState('Palestine, Nablus');
  const [favouriteTeam, setFavouriteTeam] = useState('Barcelona');
  const [university, ] = useState('Birzeit University');
  const [major, ] = useState('Computer Science');
  const [company, setCompany] = useState('Cairo Amman Bank');
  const [occupation, setOccupation] = useState('Software Systems Officer');


  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = () => {
    setEditing(false);
    // Perform save logic here
  };

  const handleCancelEdit = () => {
    setEditing(false);
    // Reset the form or discard changes
  };

  return (

    <>
    <SEO
      titleTemplate="Profile page"
      description="The website's profile page that shows a list of information about me"
    />

    <RootContainer sx={{ backgroundColor: darkMode ? 'rgb(0, 0, 0, 1)' : 'rgb(33, 33, 33)' }}>
      <ProfileAvatar alt="Profile Image" src={myImage} />
      <NameTypography variant="h4" component="h2">
        {editing ? (
          <InputField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ backgroundColor: darkMode ? 'rgb(33, 33, 33)' : 'rgb(0, 0, 0, 1)' }}
          />
        ) : (
          name
        )}
      </NameTypography>

      <TableContainer>
      <TableContainerWrapper>
        <Table>
          <TableHead style={{ backgroundColor: darkMode ? 'rgb(33, 33, 33)' : 'rgb(0, 0, 0, 1)' }}
 >
            <TableRow>
              <TableCellStyle>Field</TableCellStyle>
              <TableCellStyle>Value</TableCellStyle>
            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow>
              <TableCellStyle>Age</TableCellStyle>
              <TableCellStyleData>
                {editing ? (
                  <InputField
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                    style={{ backgroundColor: darkMode ? 'rgb(33, 33, 33)' : 'rgb(0, 0, 0, 1)' }}
                  />
                ) : (
                  age
                )}
              </TableCellStyleData>
            </TableRow>

            <TableRow>
              <TableCellStyle>Location</TableCellStyle>
              <TableCellStyleData>
                {editing ? (
                  <InputField
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Company"
                    style={{ backgroundColor: darkMode ? 'rgb(33, 33, 33)' : 'rgb(0, 0, 0, 1)' }}
                  />
                ) : (
                  location
                )}
              </TableCellStyleData>
            </TableRow>

            <TableRow>
              <TableCellStyle>Favourite Team</TableCellStyle>
              <TableCellStyleData>
                {editing ? (
                  <InputField
                    type="text"
                    value={favouriteTeam}
                    onChange={(e) => setFavouriteTeam(e.target.value)}
                    placeholder="Favourite team"
                    style={{ backgroundColor: darkMode ? 'rgb(33, 33, 33)' : 'rgb(0, 0, 0, 1)' }}
                  />
                ) : (
                  favouriteTeam
                )}
              </TableCellStyleData>
            </TableRow>

            <TableRow>
              <TableCellStyle>University</TableCellStyle>
              <TableCellStyleData>
                {editing ? (
                  <InputField
                    type="text"
                    value={university}
                    placeholder="University"
                    style={{ backgroundColor: darkMode ? 'rgb(33, 33, 33)' : 'rgb(0, 0, 0, 1)' }}
                  />
                ) : (
                  university
                )}
              </TableCellStyleData>
            </TableRow>

            <TableRow>
              <TableCellStyle>Major</TableCellStyle>
              <TableCellStyleData>
                {editing ? (
                  <InputField
                    type="text"
                    value={major}
                    placeholder="Major"
                    style={{ backgroundColor: darkMode ? 'rgb(33, 33, 33)' : 'rgb(0, 0, 0, 1)' }}
                  />
                ) : (
                  major
                )}
              </TableCellStyleData>
            </TableRow>

            <TableRow>
              <TableCellStyle>Company</TableCellStyle>
              <TableCellStyleData>
                {editing ? (
                  <InputField
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company"
                    style={{ backgroundColor: darkMode ? 'rgb(33, 33, 33)' : 'rgb(0, 0, 0, 1)', color: darkMode ? '#fff' : '#fff' }}
                  />
                ) : (
                  company
                )}
              </TableCellStyleData>
            </TableRow>

            <TableRow>
              <TableCellStyle>Occupation</TableCellStyle>
              <TableCellStyleData>
                {editing ? (
                  <InputField
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    placeholder="Occupation"
                    style={{ backgroundColor: darkMode ? 'rgb(33, 33, 33)' : 'rgb(0, 0, 0, 1)', color: darkMode ? '#fff' : '#fff' }}
                  />
                ) : (
                  occupation
                )}
              </TableCellStyleData>
            </TableRow>

          </TableBody>
        </Table>
        </TableContainerWrapper>
      </TableContainer>


      {editing ? (
        <>
          <Button variant="contained" style={{margin: '20px 0'}} color="primary" onClick={handleSaveProfile}>
            Save Profile
          </Button>
          <Button variant="outlined" color="primary" onClick={handleCancelEdit}>
            Cancel
          </Button>
        </>
      ) : (
        <Button variant="contained" style={{margin: '20px 0'}} color="primary" onClick={handleEditProfile}>
          Edit Profile
        </Button>
      )}
      <DarkModeToggle checked={darkMode} onChange={handleToggleDarkMode} />
    </RootContainer>
    </>
  );
};

export default Profile;
