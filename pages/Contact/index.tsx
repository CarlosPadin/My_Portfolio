import { NextPage } from "next";
import Image from "next/image";

import Layout from "@/components/Layout/Layout";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import ContactCard from "@/components/Contact/ContactCard";
import Title from "@/components/UI/Title";

const Contact: NextPage = () => {
  return (
    <Layout title="Contact">
      <Grid container sx={{ marginY: "2rem" }}>
        <Grid item xs={12} sm={4}>
          <Stack alignItems='center'>
            <Image
              width={300}
              height={500}
              src="/img/Me.jpg"
              alt="Personal Photo"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ padding: "2rem" }}>
          <Stack direction="column" spacing={2} alignItems="center">
            <Title title="Contact" />
            <Divider variant="middle" orientation="horizontal" />
          </Stack>
          <ContactCard />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Contact;
