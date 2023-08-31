import { NextPage } from "next";

import { Grid } from "@mui/material";
import StudyItem from "@/components/Studies/StudyItem";
import Layout from "@/components/Layout/Layout";
import Title from "@/components/UI/Title";
import { STUDIES } from "@/utils/data";


const Education: NextPage = () => {
  return (
    <Layout title="Education">
      <Title title="Education" />
      <Grid
        container
        spacing={2}
        sx={{
          marginY: "2%",
        }}
      >
        {STUDIES.map((course) => (
          <Grid item xs={11} md={6} xl={3} key={course.name}>
            <StudyItem
              name={course.name}
              company={course.company_name}
              graduationDate={course.graduation_date}
              skills={course.skills}
              logo={course.logo}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Education;
