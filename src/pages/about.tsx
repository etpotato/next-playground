import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { TitleOne } from '../components'
import { TitleOneProps } from '../components/Titles'
import Link from 'next/link'

const child: TitleOneProps['children'] = 'Child'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TitleOne>{child}</TitleOne>
        <Link href="/">Home</Link>
        <Link href="components">Components</Link>
      </main>
    </>
  )
}
