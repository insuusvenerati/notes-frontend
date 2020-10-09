import CssBaseline from "@material-ui/core/CssBaseline";
import { RewriteFrames } from "@sentry/integrations";
import * as Sentry from "@sentry/browser";
import "assets/tailwind.css";
import { Layout } from "components/Layout";
import { SignInModal } from "components/SigninModal";
import { ApolloContextProvider } from "context/apollo";
import { AuthContextProvider } from "context/auth";
import { NotesContextProvider } from "context/notes";
import { ThemeContextProvider } from "context/theme";
import { AppProps } from "next/app";
import getConfig from "next/config";
import Head from "next/head";
import { CookiesProvider } from "react-cookie";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  const config = getConfig();
  const distDir = `${config.serverRuntimeConfig.rootDir}/.next`;
  Sentry.init({
    enabled: process.env.NODE_ENV === "production",
    integrations: [
      new RewriteFrames({
        iteratee: (frame) => {
          frame.filename = frame?.filename?.replace(distDir, "app:///_next");
          return frame;
        },
      }),
    ],
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

export default function MyApp({ Component, pageProps, err }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Notes</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="icons/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <CookiesProvider>
        <ApolloContextProvider>
          <AuthContextProvider>
            <ThemeContextProvider>
              <NotesContextProvider>
                <CssBaseline />
                <Layout>
                  <SignInModal />
                  <Component {...pageProps} err={err} />
                </Layout>
              </NotesContextProvider>
            </ThemeContextProvider>
          </AuthContextProvider>
        </ApolloContextProvider>
      </CookiesProvider>
    </>
  );
}
