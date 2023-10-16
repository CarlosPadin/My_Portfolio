import { FC } from "react";
import { Box, Link, List, ListItem, ListItemButton, Typography } from "@mui/material";

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
          <Box marginY={0}>
            <Typography variant="body1"><b>Social Media:</b></Typography>
            <List>
              <ListItem>
                <Typography variant="body2">
                  <b>Linkedin: </b> <Link href='https://www.linkedin.com/in/carlospadinfdez' color='inherit' underline="hover" >https://www.linkedin.com/in/carlospadinfdez/</Link>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  <b>GitHub: </b> <Link href='https://github.com/CarlosPadin/' color='inherit' underline="hover" >https://github.com/CarlosPadin/</Link>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  <b>X: </b> <Link href='https://www.x.com/Puddin391/' color='inherit' underline="hover">https://www.x.com/Puddin391/</Link>
                </Typography>
              </ListItem>
            </List>
          </Box>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default ContactCard;
