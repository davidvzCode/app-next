import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ProductSummary from '@components/ProductSummary/ProductSummary'

const ProductItem = () => {
    const { query } = useRouter()
    const [product, setProduct] = useState([])

    useEffect(() => {
        if (query.id) {
            window
                .fetch(`/api/avo/${query.id}`)
                .then((response) => response.json())
                .then((data) => {
                    setProduct(data)
                })
        }
    }, [query.id])

    return (
        <div>
            {product == null ? null : <ProductSummary product={product} />}
        </div>
    )
}

export default ProductItem
