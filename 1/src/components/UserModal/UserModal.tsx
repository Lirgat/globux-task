import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import type { JSX } from '@emotion/react/jsx-runtime';
import type { FC } from 'react';

interface User {
  name: string
	phone: string,
	email: string,
	address?: string,
	position_name?: string,
	department?: string
	hire_date?: string
}

interface Props {
  user: User;
  onClose: () => void;
}

const UserModal:FC<Props> = ({ user, onClose }):JSX.Element => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>
        {user.name}
        <IconButton sx={{ position: 'absolute', right: 8, top: 8 }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1"><strong>Телефон:</strong> {user.phone}</Typography>
        <Typography variant="body1"><strong>Почта:</strong> {user.email}</Typography>
        <Typography variant="body1"><strong>Адрес проживания:</strong> {user.address}</Typography>
        <Typography variant="body1"><strong>Должность:</strong> {user.position_name}</Typography>
        <Typography variant="body1"><strong>Подразделение:</strong> {user.department}</Typography>
        <Typography variant="body1"><strong>Дата приёма на работу:</strong> {user.hire_date}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;