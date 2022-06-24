import CssBaseline from "@mui/material/CssBaseline";
import { Layout } from "components/Layout";
import { SignInModal } from "components/SigninModal";
import { ApolloContextProvider } from "context/apollo";
import { AuthContextProvider } from "context/auth";
import { NotesContextProvider } from "context/notes";
import { ThemeContextProvider } from "context/theme";
import Head from "next/head";
import { CookiesProvider } from "react-cookie";
import "../styles/globals.css"

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

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://notes.stiforr.tech/" />
        <meta property="og:title" content="Notes" />
        <meta property="og:description" content="A place to leave notes for other people!" />
        <meta property="og:image" content="https://i.imgur.com/IjrsBBV.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://notes.stiforr.tech/" />
        <meta property="twitter:title" content="Notes" />
        <meta property="twitter:description" content="A place to leave notes for other people!" />
        <meta property="twitter:image" content="https://i.imgur.com/IjrsBBV.png" />

        <link rel="manifest" href="manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Notes" />
        <meta name="apple-mobile-web-app-title" content="Notes" />
        <meta name="theme-color" content="#9C27B0" />
        <meta name="msapplication-navbutton-color" content="#9C27B0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href="icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link href="icons/favicon-96x96.png" rel="icon" type="image/png" sizes="96x96" />

        <link rel="icon" type="image/png" sizes="192.192" href="/icons/android-icon-192x192.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="192.192"
          href="/icons/android-icon-192x192.png"
        />
        <link rel="icon" type="image/png" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link rel="icon" type="image/png" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
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
