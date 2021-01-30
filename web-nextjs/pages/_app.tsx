import { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import "../assets/styles/globals.css";

import theme from "../components/themes";
import Layout from "../components/Layout";
import { useSticky } from "../components/helpers";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { element, isSticky } = useSticky();

  return (
    <ThemeProvider theme={theme}>
      <Layout isNavSticky={isSticky}>
        <Component headerElement={element} {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
