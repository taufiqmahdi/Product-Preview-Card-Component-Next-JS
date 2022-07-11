import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";
import Layout from '../components/Layout'

const colors = {
  primary: {
    darkCyan: "hsl(158, 36%, 37%)",
    cream: "hsl(30, 38%, 92%)",
  },
  neutral: {
    veryDarkBlue: "hsl(212, 21%, 14%)",
    darkGrayishBlue: "hsl(228, 12%, 48%)",
    white: "hsl(0, 0%, 100%)",
  },
};

const breakpoints = {
  mobile: '0px',
  desktop: '376px'
}

const theme = extendTheme({ colors, breakpoints });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
