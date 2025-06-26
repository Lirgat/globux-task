import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import type { FC } from 'react';
import type { Props } from '../../types/type';
import type { JSX } from '@emotion/react/jsx-runtime';
import { Smartphone } from '@mui/icons-material';

const UserCard:FC<Props> = ({ user, onClick }):JSX.Element => {
  return (
    <Card onClick={onClick} sx={{ cursor: 'pointer', width: 300, height: 150, mb: 2 }}>
      <CardContent>
        <Typography variant="h6"><strong>{user.name}</strong></Typography>
        <Typography>
          <Smartphone htmlColor='#432EAB' fontSize="small" /> {user.phone}
        </Typography>
        <Typography>
          <MailOutlineIcon htmlColor='#432EAB' fontSize="small" /> {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;