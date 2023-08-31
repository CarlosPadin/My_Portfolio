import { NextPage } from "next";

import { Stack, Typography } from "@mui/material";

const notFoundPage: NextPage = () => {
  return (
    <Stack justifyContent='center' alignItems='center' sx={{height: '100vh'}}>
        <Typography variant="h3">404</Typography>
        <Typography>Not Found</Typography>
    </Stack>
  )
}

export default notFoundPage;
