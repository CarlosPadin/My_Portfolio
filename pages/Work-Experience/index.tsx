import { NextPage } from "next";

import { Grid } from "@mui/material";
import JobItem from "@/components/Jobs/JobItems";
import Layout from "@/components/Layout/Layout";
import Title from "@/components/UI/Title";
import { JOBS_ARRAY } from "@/utils/data";

const WorkExperience: NextPage = () => {
  return (
    <Layout title="Work-Experience">
      <Title title="Work-Experience" />
      <Grid container spacing={2} sx={{ marginY: "2%" }}>
        {JOBS_ARRAY.map((job) => (
          <Grid item xs={9} md={6} xl={4} key={job.initial_date}>
            <JobItem
              position={job.position}
              place={job.place}
              initial_date={job.initial_date}
              end_date={job.end_date}
              logo={job.company_logo}
              tasks={job.tasks}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default WorkExperience;
