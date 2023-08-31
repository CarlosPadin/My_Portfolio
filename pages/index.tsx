import { NextPage } from "next";

import { Box, Stack, Typography } from "@mui/material";
import Skills from "@/components/Main/Skills";
import Layout from "@/components/Layout/Layout";
import { DESCRIPTION } from "@/utils/data";


const HomePage: NextPage = () => {
  return (
    <Layout title="Home">
      <Box
        sx={{
          marginY: "10%",
        }}
      >
        <Stack direction="column" spacing={3} >
          <Typography variant="h5" >Hello, my name is</Typography>
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
            {DESCRIPTION}
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
