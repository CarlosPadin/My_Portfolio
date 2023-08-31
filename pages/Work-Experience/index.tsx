import { NextPage } from "next";

import { Grid } from "@mui/material";
import JobItem from "@/components/Jobs/JobItems";
import Layout from "@/components/Layout/Layout";
import Title from "@/components/UI/Title";


const JOBS_ARRAY = [
  {
    position: "Main Specialist in diagnostic ultrasound technologies",
    place: "Center for Clinic Engineering and Electromedicine",
    initial_date: "01/07/2022",
    end_date: "10/04/2023",
    company_logo: '/img/JobsLogos/CNE.png',
    tasks: [
      "Installing and maintaining Diagnostic Ultrasound Technologies in Cuba",
      "Installing and maintaining Diagnostic Bone Densitometry in Cuba",
      "Installing and maintaining Diagnostic Ultrasound Lithotrite in Cuba",
    ],
  },
  {
    position: "Specialist A in imaging technologies",
    place: "Center for Clinic Engineering and Electromedicine",
    initial_date: "31/08/2019",
    end_date: "30/06/2022",
    company_logo: '/img/JobsLogos/CNE.png',
    tasks: [
      "Investigations about improving imaging technologies",
      "Preventive and corrective maintenance to imaging technologies in Havana",
      "Installation of imaging technologies in medical centers in Cuba",
    ],
  },
  {
    position: "Resaercher Engineer",
    place: "Center for Neuroscience in Cuba",
    initial_date: "01/09/2018 ",
    end_date: "14/06/2019",
    company_logo: '/img/JobsLogos/CNEURO.png',
    tasks: [
      "Build a MatLab program that analyze all the data coming from Nuclear Magnetic Resonance equipment and process it with multivariate statistics for the automatization of a system to quality control for the National Health System in these technologies.",
    ],
  },
];


const WorkExperience: NextPage = () => {
  return (
    <Layout title="Work-Experience">
      <Title title="Work-Experience" />
      <Grid
        container
        spacing={2}
        sx={{marginY: "2%"}}
      >
        {JOBS_ARRAY.map((job) => (
          <Grid item xs={9} md={6} xl={4} key={job.initial_date} >
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
