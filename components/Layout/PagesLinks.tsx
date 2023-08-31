import { FC } from "react";
import Link from "next/link";

import {
  CottageOutlined,
  SchoolOutlined,
  WorkOutlineOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";

const PagesLinks: FC = () => {
  return (
    <Stack
      direction="column"
      spacing={3}
      height="100vh"
      display="flex"
      justifyContent="center"
      sx={{ position: "fixed" }}
    >
      <Tooltip title="HOME">
        <Link href="/">
          <IconButton color="primary">
            <CottageOutlined fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="EDUCATION">
        <Link href="/Education">
          <IconButton color="primary">
            <SchoolOutlined fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="WORK EXPERIENCE">
        <Link href="/Work-Experience/">
          <IconButton color="primary">
            <WorkOutlineOutlined fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="CONTACT">
        <Link href="/Contact">
          <IconButton color="primary">
            <PersonOutlineOutlined fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
};

export default PagesLinks;
