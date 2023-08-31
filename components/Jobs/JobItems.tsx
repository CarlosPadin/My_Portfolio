import { FC } from "react";

import {
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import CardSized from "../UI/CardSized";

interface Props {
  position: string;
  place: string;
  initial_date: string;
  end_date: string;
  logo: string;
  tasks: string[];
}

const JobItem: FC<Props> = ({
  position,
  place,
  initial_date,
  end_date,
  logo,
  tasks,
}) => {

  return (
    <CardSized>
      <Stack alignItems='center' sx={{padding: '10px', height: '300'}}>
        <CardMedia
          component="img"
          height= '150'
          image={logo}
          alt="Enterprise_Logo"
          sx={{ width: 150, borderRadius: '5px'}}
        />
      </Stack>

      <CardContent>
        <Typography variant="h4">{position}</Typography>
        <Typography variant="subtitle1" color="GrayText">
          {initial_date} - {end_date}
        </Typography>
        <List>
          {tasks.map((task) => (
            <ListItem key={task}>
              <ListItemButton>
                <Typography variant="body1" align="justify">
                  {task}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
          <Typography variant="overline" sx={{ fontWeight: "bolder" }}>
            {place}
          </Typography>
      </CardContent>
    </CardSized>
  );
};

export default JobItem;
