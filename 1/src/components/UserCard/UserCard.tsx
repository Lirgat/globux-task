import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import type { FC } from "react";
import type { Props } from "../../types/type";
import type { JSX } from "@emotion/react/jsx-runtime";
import { Smartphone } from "@mui/icons-material";

const UserCard: FC<Props> = ({ user, onClick }): JSX.Element => {
  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        width: 357,
        height: 314,
        mb: 2,
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontFamily: "Proxima Nova",
            fontSize: "24px",
            color: "#262C40",
            lineHeight: "30px",
          }}
        >
          <strong>{user.name}</strong>
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "24px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Proxima Nova",
              fontWeight: 400,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "14px",
              fontSize: "14px",
              color: "#8189A3",
            }}
          >
            <Smartphone htmlColor="#432EAB" fontSize="small" /> {user.phone}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Proxima Nova",
              fontWeight: 400,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "14px",
              fontSize: "14px",
              color: "#8189A3",
            }}
          >
            <MailOutlineIcon htmlColor="#432EAB" fontSize="small" />{" "}
            {user.email}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
