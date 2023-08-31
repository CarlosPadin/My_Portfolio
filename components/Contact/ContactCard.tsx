import { FC } from "react";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";

const ContactCard: FC = () => {
  return (
    <List>
      <ListItem>
        <ListItemButton>
          <Typography variant="body1">
            <b>E-mail:</b> padin790@gmail.com
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <Typography variant="body1">
            <b>Phone number:</b> (+53) 5 357 9164
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <Typography variant="body1">
            <b>Address:</b> 16th Street #259, Revolution Square
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <Typography variant="body1">
            <b>City and Country:</b> Havana, Cuba
          </Typography>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default ContactCard;
