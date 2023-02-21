import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import anime from '../data/crunchyrollanime.json'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {

  const [openInfo, setOpenInfo] = useState(false)

  function handleClick () {
    setOpenInfo(prev => !prev)
  }

  return (
    <>
      <Head>
        <title>Aniverse</title>
        <meta name="description" content="An app that lists anime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/aniverse.png" />
      </Head>
      <main className={styles.list_cont}>
        <div className={styles.heading}>
          <h1>List of anime</h1>
            <div>
            <Link href="/"> 
                <button>Back</button>
            </Link>
            <button onClick={handleClick}>Show & hide info</button>
          </div>
        </div>
      <div className={styles.content}>
        {
          anime && anime.map( (ani, index) => {
            return(
             <div className={styles.item} key={index}>
                <div className={styles.image}>
                  <Image src={ani.anime_img} alt="cover art of anime" width={150} height={200}/>
                </div> 
                <div className={styles.title}>       
                  <h2>{ani.anime}</h2>
                </div>
                {openInfo? 
                <div className={styles.info}>
                  Episodes: {ani.episodes} 
                </div>
                :null}
              </div>  
            )
          })
        }
      </div>
        <Link href="#">
          <button>Back to top</button>
        </Link>
      </main>
    </>
  )
}
