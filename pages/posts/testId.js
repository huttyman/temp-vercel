import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import { useRouter } from 'next/router'

export default function FirstPost() {
    const router = useRouter()
    const { testId } = router.query
    console.log('testId',testId)
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
                    <a>Test{testId}</a>
                </Link>
            </h2>
        </Layout>
    )
}