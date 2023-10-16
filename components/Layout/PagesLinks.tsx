import { FC } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import {
  CottageOutlined,
  SchoolOutlined,
  WorkOutlineOutlined,
  PersonOutlineOutlined,
  LightModeOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";
import { Stack, Tooltip, IconButton, Box } from "@mui/material";
import { themingActions } from "@/store/theming-slice";
import { RootState } from "@/store";

const PagesLinks: FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  const onToggle = () => {
    dispatch(themingActions.toggleTheme());
  }

  return (
    <Box>
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
          <IconButton color="primary" >
            <PersonOutlineOutlined fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
      <IconButton color="primary" onClick={onToggle}>
        {mode? <DarkModeOutlined fontSize="large"/> : <LightModeOutlined fontSize="large" />}
      </IconButton>
    </Box>
  );
};

export default PagesLinks;
