import { NextPage } from "next";

import { Box, Stack, Typography } from "@mui/material";
import Skills from "@/components/Main/Skills";
import Layout from "@/components/Layout/Layout";

const descrption =
  "I am a web developer with more than a year of experience in designing and developing dynamic and functional websites. In addition, I have been a biomedical engineer for 4 years, which has given me a solid foundation in analysis and problem solving. I consider myself a passionate and creative web developer, who strives to offer innovative and quality solutions. I like to keep up to date with the latest trends and tools in the sector, as well as learn new skills and improve existing ones. I am also very organized and responsible, able to work both independently and in a team.";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home">
      <Box
        sx={{
          marginY: "10%",
        }}
      >
        <Stack direction="column" spacing={2} >
          <Typography variant="h5">Hello, my name is</Typography>
          <Typography
            variant="h1"
            marginTop={2}
            className={"specialTypo"}
            width='95%'
          >
            Carlos M. Padin
          </Typography>
          <Typography
            variant="body1"
            marginTop={2}
            align="justify"
            width='95%'
          >
            {descrption}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ marginTop: "3%", marginBottom: '1%' }}>
          As a web developer, I am use to work with:
        </Typography>
        <Stack justifyContent='center' alignItems='center'>
          <Skills />
        </Stack>
      </Box>
    </Layout>
  );
};

export default HomePage;
