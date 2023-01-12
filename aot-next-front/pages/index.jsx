import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

import Hero from '../components/index/banner/Hero';
import Blurb from '../components/index/banner/Blurb'

import HighlightList from '../components/index/highlights/HighlightList'


export default function Home() {
  return (
    <>
      <Head>
        <title>AOT Services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inspiration&display=swap" rel="stylesheet"/>
        {/* <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap" rel="stylesheet"/> */}
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300&display=swap" rel="stylesheet"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={ styles.banner }>
        <Header styles={ styles }/>
        <Hero styles={ styles }/>
      </div>

      {/* <Blurb styles={ styles } /> */}

      <main className={ styles.main }>
        <HighlightList />
      </main>

      <Footer styles={ styles }/>
    </>
  )
}
