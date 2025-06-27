import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import type { JSX } from "@emotion/react/jsx-runtime";
import type { FC } from "react";

interface User {
  name: string;
  phone: string;
  email: string;
  address?: string;
  position_name?: string;
  department?: string;
  hire_date?: string;
}

interface Props {
  user: User;
  onClose: () => void;
}

const UserModal: FC<Props> = ({ user, onClose }): JSX.Element => {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      slotProps={{
        paper: {
          style: {
            borderRadius: "16px"
          }
        },
        backdrop: {
          style: {
            backgroundColor: "hsla(219, 17.50%, 77.60%, 0.50)"
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          fontFamily: "Proxima Nova",
          fontSize: "24px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {user.name}
        <IconButton
          onClick={onClose}
          sx={{
            "& .MuiSvgIcon-root": {
              fontWeight: "bold",
              strokeWidth: 10,
            },
          }}
        >
          <CloseIcon fontSize="large" htmlColor="#000000" />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "24px",
            gap: 2,
          }}
        >
          <Typography variant="body1" sx={{ display: "flex", gap: 2 }}>
            <Typography
              component="span"
              sx={{
                fontFamily: "Proxima Nova",
                fontWeight: 400,
                color: "#262C40",
                width: "150px",
              }}
            >
              Телефон:
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: "Proxima Nova",
                color: "#8189A3",
                fontWeight: "400",
              }}
            >
              {user.phone}
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", gap: 2 }}>
            <Typography
              component="span"
              sx={{
                fontFamily: "Proxima Nova",
                fontWeight: 400,
                color: "#262C40",
                width: "150px",
              }}
            >
              Почта:
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: "Proxima Nova",
                color: "#8189A3",
                fontWeight: "400",
              }}
            >
              {user.email}
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", gap: 2 }}>
            <Typography
              component="span"
              sx={{
                fontFamily: "Proxima Nova",
                fontWeight: 400,
                color: "#262C40",
                width: "150px",
              }}
            >
              Дата приема:
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: "Proxima Nova",
                color: "#8189A3",
                fontWeight: "400",
              }}
            >
              {user.hire_date || "-"}
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", gap: 2 }}>
            <Typography
              component="span"
              sx={{
                fontFamily: "Proxima Nova",
                fontWeight: 400,
                color: "#262C40",
                width: "150px",
              }}
            >
              Должность:
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: "Proxima Nova",
                color: "#8189A3",
                fontWeight: "400",
                wordBreak: "break-word",
                maxWidth: "250px",
              }}
            >
              {user.position_name || "-"}
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", gap: 2 }}>
            <Typography
              component="span"
              sx={{
                fontFamily: "Proxima Nova",
                fontWeight: 400,
                color: "#262C40",
                width: "150px",
              }}
            >
              Подразделение:
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: "Proxima Nova",
                color: "#8189A3",
                fontWeight: "400",
                wordBreak: "break-word",
                maxWidth: "250px",
              }}
            >
              {user.department || "-"}
            </Typography>
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Proxima Nova",
                fontWeight: 400,
                color: "#262C40",
              }}
            >
              Дополнительная информация:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Proxima Nova",
                fontWeight: 400,
                mt: 1,
                color: "#8189A3",
              }}
            >
              {"Нет данных"}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
