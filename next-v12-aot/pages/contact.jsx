import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

import ContactHeader from '../components/contact/ContactHeader';
import ContactMe from '../components/contact/Contact';

import contactStyles from '../styles/Contact.module.scss';

export default function Contact(){

  const router = useRouter();
  const [subject, setSubject] = useState(undefined);

  useEffect(()=>{
    if (router.query.subject && !subject){
      setSubject(router.query.subject)
    }
  })

  return (
    <>
      <Head>
        <title>Contact - AOT Services</title>
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
      <Header styles={ styles } alt={ true }/>

      <main className={ [ styles.main, contactStyles.main ].join(' ') }>
        <ContactHeader styles={ contactStyles }/>
        <ContactMe styles={ contactStyles } subject={ subject } setSubject={ setSubject }/>
      </main>

      <Footer styles={ styles }/>

    </>
  );
}