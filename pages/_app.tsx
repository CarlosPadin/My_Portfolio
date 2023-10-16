import type { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "@/store";

import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "@/theme";

import "@/styles/globals.css";

// Roboto Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const InnerComponent = ({ Component, pageProps }: AppProps) => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = mode ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default function MyApp(props: AppProps) {
  return (
    <Provider store={store}>
      <InnerComponent {...props} />
    </Provider>
  );
}

