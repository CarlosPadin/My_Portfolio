import { FC } from "react";

import {
  GitHub,
  LinkedIn,
  Mail,
  Telegram,
  TheaterComedyOutlined,
  Twitter,
} from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

const SocialLinks: FC = () => {
  return (
    <Stack direction="row" spacing="0.1em">
      <Link href="https://linkedin.com/in/carlospadinfdez">
        <Button>
          <LinkedIn />
        </Button>
      </Link>
      <Link href="https://X.com/Puddin391">
        <Button>
          <Twitter />
        </Button>
      </Link>
      <Link href="https://t.me/Padin39">
        <Button>
          <Telegram />
        </Button>
      </Link>
      <Link href="https://github.com/CarlosPadin">
        <Button>
          <GitHub />
        </Button>
      </Link>
      <Link href="mailto:padin790@gmail.com">
        <Button>
          <Mail />
        </Button>
      </Link>
      
    </Stack>
  );
};

export default SocialLinks;
