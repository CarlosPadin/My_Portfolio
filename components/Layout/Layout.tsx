import { FC, ReactNode } from "react";

import { Divider, Stack } from "@mui/material";
import SocialLinks from './SocialLinks';
import PagesLinks from './PagesLinks';
import Head from "next/head";
import Footer from "../UI/Footer";

interface Props {
  children: ReactNode;
  title: string
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`Portfolio | ${title}`}</title>
        <meta name="author" content="Carlos Padin" />
        <meta name="description" content="Information about mi programming skills" />
        <meta name="keywords" content="Portfolio, Carlos, Padin, Padín, Programing, Web Developing" />
      </Head>

      <Stack direction="row" spacing={15} sx={{ margin: '1rem 0 0 1rem'}}>
        <PagesLinks />
        <Stack direction="column" width="100%">
          <Divider textAlign="right" variant="inset">
            <SocialLinks />
          </Divider>

          {children}

        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default Layout;
