import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../containers/Header'
import Latest from '../containers/Latest'
import Grid from '../containers/Grid'
import About from '../containers/About'
import Footer from '../components/Footer'

export default () => (
  <div>
    <Head>
      <title>Web developer challenge</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/flickity.css" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
    </Head>
    <div>
      <Navbar />
      <Header />
      <Latest />
      <Grid />
      <About />
      <Footer />
    </div>
  </div>
)