import '../styles/globals.css'
import '../styles/modal.css'
import 'bootstrap/dist/css/bootstrap.css'

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (<>
    <Component {...pageProps} />
  </>)
}

export default MyApp
