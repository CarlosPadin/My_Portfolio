import { Card } from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardSized: FC<Props> = ({ children }) => {
  return (
    <Card variant="outlined" sx={{ width: '98%', height: '100%' }}>
      {children}
    </Card>
  );
};

export default CardSized;
