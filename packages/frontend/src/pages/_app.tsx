import Header from "../components/base/Header/Header"
import TILThemeProvider from "../styles/TILThemeProivder"


function MyApp({ Component, pageProps }) {
  return (
    <TILThemeProvider>
      <Component {...pageProps} />
    </TILThemeProvider>
  )
}

export default MyApp
