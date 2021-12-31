import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import DataInsertProvider from "../context/DataInsertProvider";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <DataInsertProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </DataInsertProvider>
  );
}
