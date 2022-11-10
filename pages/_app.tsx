import type { AppProps } from 'next/app'
import Layout from '@components/Layout'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'

import CartProvider from '@store/Cart'
export function reportWebVitals(metric) {
    console.log(metric)
}
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <CartProvider>
                <Component {...pageProps} />
            </CartProvider>
        </Layout>
    )
}
