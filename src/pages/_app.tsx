import '../styles/global.css'


function MyApp({ Component, pageProps }) {

  console.log('Pageprops ', pageProps)
  console.log('comp', Component)

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
