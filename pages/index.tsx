import React from 'react'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export async function getServerSideProps(params) {
    const response = await fetch('https://app-next-blush.vercel.app/api/avo')
    const { data: productList }: TAPIAvoResponse = await response.json()

    return {
        props: {
            productList,
        }, // will be passed to the page component as props
    }
}

const Home = ({ productList }: { productList: TProduct[] }) => {
    //const [productList, setProductList] = useState([])

    // useEffect(() => {
    //     fetch('/api/avo')
    //         .then((response) => response.json())
    //         .then(({ data, length }) => {
    //             setProductList(data)
    //         })
    // }, [])
    return (
        <>
            <KawaiiHeader />
            <ProductList products={productList} />
        </>
    )
}

export default Home
