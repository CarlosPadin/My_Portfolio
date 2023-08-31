import { NextPage } from "next";

import { Stack, Typography } from "@mui/material";

const serverErrorPage: NextPage = () => {
  return (
    <Stack justifyContent='center' alignItems='center' sx={{height: '100vh'}}>
        <Typography variant="h3">500</Typography>
        <Typography>Internal Server Error</Typography>
    </Stack>
  )
}

export default serverErrorPage;
