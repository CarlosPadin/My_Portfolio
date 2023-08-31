import { NextPage } from "next";

import { Grid } from "@mui/material";
import StudyItem from "@/components/Studies/StudyItem";
import Layout from "@/components/Layout/Layout";
import Title from "@/components/UI/Title";

const STUDIES = [
  {
    name: "Introduction to Next.JS",
    company_name: "CodigoFacilito",
    graduation_date: "02/07/2023",
    logo: "/img/StudiesLogos/HostGator.jfif",
    skills: [
      "Introduction to Next.JS and TypeScript",
      "Routing, Styling, React Elements",
      "Use of getStaticProps() and getStaticPath()",
      "Deploying in Vercel",
    ],
  },
  {
    name: "ChatGPT Prompt Engineer",
    company_name: "DeepLearning.AI",
    graduation_date: "10/05/2023",
    logo: "/img/StudiesLogos/DeeplearningAi.jfif",
    skills: [
      "Write clear and specific instructions",
      "Iterative prompt development",
      "Summarizing, Inferring, Transforming, Expanding",
      "Building a Chatbot",
    ],
  },
  {
    name: "Data Month Challenge",
    company_name: "Microsoft",
    graduation_date: "23/03/2023",
    logo: "/img/StudiesLogos/Microsoft.png",
    skills: [
      "Basis of Git and GitHub",
      "Basis of Data Managing with Python and Visual Studio Code",
      "Transact-SQL",
      "Fundamentals of Machine Learning",
      "Basics of Power BI",
      "Introduction to Azure Machine Learning",
    ],
  },
  {
    name: "Backend Bootcamp with Python",
    company_name: "CodigoFacilito",
    graduation_date: "06/03/2023",
    logo: "/img/StudiesLogos/HostGator.jfif",
    skills: [
      "Python concepts for Backend developing",
      "Backend Development with Python (Django)",
    ],
  },
  {
    name: "Full Web Development",
    company_name: "SoloLearn",
    graduation_date: "20/12/2022",
    logo: "/img/StudiesLogos/Sololearn.jfif",
    skills: [
      "Front-End Development with HTML5, CSS3 and JavaScript (React + Redux)",
      "Backend Development with Python (Django) or JavaScript (Node) and SQL (MySQL)",
    ],
  },
  {
    name: "Biomedical Engineering",
    company_name: "Technological University of Havana",
    graduation_date: "15/07/2019",
    logo: "/img/StudiesLogos/CUJAE.png",
    skills: ["Master’s Degree in a 5-year Single Cycle program"],
  },
];

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
