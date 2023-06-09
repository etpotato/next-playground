import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import * as components from '../components'
import Link from 'next/link'

const componentMap = [
  {
    name: 'Hero',
  },
  {
    name: 'TitleOne',
    props: { children: 'Title One Child' },
  },
]

const Components: { [key: string]: React.ElementType } = {...components}

export default function Home() {
  return (
    <>
      <Head>
        <title>Components</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul>
          {componentMap.map((item) => {
            const Component = Components[item.name];

            if (!Component) {
              return null
            }

            return (
              <li key={item.name}>
                <Component {...item.props} />
              </li>
            )
          })}
        </ul>
        <Link href="/">Home</Link>
        <Link href="about">About</Link>
      </main>
    </>
  )
}
