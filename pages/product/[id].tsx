import React from 'react'

import ProductSummary from '@components/ProductSummary/ProductSummary'
import { GetStaticProps, GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://app-next-blush.vercel.app/api/avo')
    const { data }: TAPIAvoResponse = await response.json()

    const paths = data.map((avo) => ({
        params: {
            id: avo.id,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string
    const response = await fetch(
        `https://app-next-blush.vercel.app/api/avo/${id}`
    )
    const product: TProduct = await response.json()

    return {
        props: {
            product,
        }, // will be passed to the page component as props
    }
}

const ProductItem = ({ product }) => {
    // const { query } = useRouter()
    // const [product, setProduct] = useState([])

    // useEffect(() => {
    //     if (query.id) {
    //         window
    //             .fetch(`/api/avo/${query.id}`)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 setProduct(data)
    //             })
    //     }
    // }, [query.id])

    return (
        <div>
            {product == null ? null : <ProductSummary product={product} />}
        </div>
    )
}

export default ProductItem
