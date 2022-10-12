import React, { useEffect, useState } from 'react'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
const Home = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetch('/api/avo')
            .then((response) => response.json())
            .then(({ data, length }) => {
                setProductList(data)
            })
    }, [])
    return (
        <>
            <KawaiiHeader />
            <ProductList products={productList} />
        </>
    )
}

export default Home
