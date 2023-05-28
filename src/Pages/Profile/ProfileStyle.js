import { styled } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { Box } from '@mui/material';
import TableCell from '@mui/material/TableCell';

export const RootContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 47,
    paddingBottom: 47,
    backgroundColor: '#1f1f1f',
    color: '#fff',
  });
  
  export const ProfileAvatar = styled(Avatar)({
    width: 200,
    height: 200,
    marginBottom: 16,
  });
  
  export const NameTypography = styled(Typography)({
    marginBottom: 47,
  });
  
  export const InfoTypography = styled(Typography)({
    marginBottom: 8,
  });
  
  export const DarkModeToggle = styled(Switch)({
    marginTop: 16,
  });

  export const InputField = styled('input')({
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: 4,
    marginBottom: 8,
  });

  export const TableContainerWrapper = styled(Box)({
    paddingLeft: 40, // Add left padding
    paddingRight: 40, // Add right padding
  });

  export const TableCellStyle = styled(TableCell)({
    color: '#fff',
    fontWeight: 700,
  });

  export const TableCellStyleData = styled(TableCell)({
    color: '#fff',
  });