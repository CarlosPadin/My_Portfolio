import { ChangeCircleOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Stack direction='row' justifyContent='end' sx={{ width: '98%'}}>
      <ChangeCircleOutlined color="primary" />
        <Typography variant="caption">Version 1.0.0</Typography>
    </Stack>
  )
}

export default Footer;
