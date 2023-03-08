// import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/sassGlobals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
