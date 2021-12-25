import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'

export default function FirstPost() {
    return (
        <Layout>  
            <Head>
                <title>
                    First Post
                </title>
            </Head>
            <h1 className={styles.fontColor}>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Test</a>
                </Link>
            </h2>
        </Layout>
    )
}