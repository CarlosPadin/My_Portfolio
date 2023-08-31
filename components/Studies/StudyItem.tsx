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
  name: string,
  company: string,
  graduationDate: string,
  logo: string,
  skills: string[],
}

const StudyItem: FC<Props> = ({ name, company, graduationDate, logo, skills}) => {
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
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1" color="GrayText">
          {graduationDate}
        </Typography>
        <List>
          {skills.map((skill) => (
            <ListItem key={skill}>
              <ListItemButton>
                <Typography variant="body1">{skill}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Typography variant="overline" sx={{ fontWeight: "bolder" }}>
          {company}
        </Typography>
      </CardContent>
    </CardSized>
  );
};

export default StudyItem;
