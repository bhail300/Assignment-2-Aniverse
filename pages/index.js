import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '../public/aniverse.png'

export default function Home() {
  
  const [openInfo, setOpenInfo] = useState(false)

  function handleClick () {
    setOpenInfo(prev => !prev)
  }

  return (
    <>
      <Head>
        <title>Aniverse</title>
        <meta property="description" content='An app that lists anime.' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/aniverse.png" />
      </Head>
      <main className={styles.home_cont}>
        <Image
          src={Logo}
          alt="Aniverse logo"
          width={200}
          height={200}
        />
        <div className={styles.welcome}>
          <h1>Welcome to Aniverse</h1>
          <p>This is an application that lists many different anime of a variety of genres.</p>
        </div>
        <div className={styles.main_buttons}>
          <Link href="/animelist"> 
              <button>Enter Aniverse</button>
          </Link>
          <button onClick={handleClick}>About Aniverse</button>
        </div>
        {openInfo? 
          <div className={styles.about}>
            <p>This application uses a dataset from Kaggle. The dataset is called "Crunchyroll animes database" and it was created by the user FILIPEFILARDI. The show and hide button on the list page allows you to either display or hide information about each indivdual anime at once.</p>
          </div>
        :null}
      </main>
    </>
  )
}
