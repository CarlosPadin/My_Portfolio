import { FC } from "react";

import { ExpandMoreOutlined } from "@mui/icons-material";
import {
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Chip,
} from "@mui/material";

const SKILLS = [
  {
    name: "Programming Languages",
    skills: ["C/C++", "Python", "MatLab", "JavaScript", "TypeScript"],
  },
  {
    name: "Frontend Technologies",
    skills: ["ReactJS", "NextJS", "Redux", "MaterialUI", "Bootstrap"],
  },
  {
    name: "Backend Technologies",
    skills: ["Node(Express)", "Django", "Flask"],
  },
  {
    name: "Versions Control",
    skills: ["Git", "GitHub"],
  },
  {
    name: "Tools",
    skills: ["VisualStudioCode", "PyCharm", "Docker"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
];

const Skills: FC = () => {
  return (
    <Stack direction="row" width='70%'>
      <Grid container spacing="1rem">
        {SKILLS.map((skill) => (
          <Grid item xs={6} md={4} key={skill.name}>
            <Accordion
              sx={{
                boxShadow: (theme) =>
                  `8px 8px 8px ${theme.palette.primary.dark}1A`,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography variant="button">{skill.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {skill.skills.map((element) => {
                  return (
                    <Chip
                      label={element}
                      key={element}
                      color="info"
                      sx={{ margin: "3px" }}
                    />
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Skills;
