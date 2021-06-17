import Header from "../components/base/Header/Header"
import TILThemeProvider from "../styles/TILThemeProivder"


function MyApp({ Component, pageProps }) {
  return (
    <TILThemeProvider>
      <Header></Header>
      <Component {...pageProps} />
    </TILThemeProvider>
  )
}

export default MyApp
