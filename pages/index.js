import Head from 'next/head'
import Navbar from '../components/Navbar'
import Grid from '../containers/Grid'
import About from '../containers/About'
import Footer from '../components/Footer'

export default () => (
  <div>
    <Head>
      <title>Web developer challenge</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
    </Head>
    <div>
      <Navbar />
      <Grid />
      <About />
      <Footer />
    </div>
  </div>
)